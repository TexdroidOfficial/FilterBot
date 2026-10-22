import dotenv from 'dotenv';
import { Client, GatewayIntentBits, Message, TextChannel } from 'discord.js';
dotenv.config()

const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

if (!n8nWebhookUrl) {
    throw new Error ("Missing N8N_WEBHOOK_URL in enviroment variables")
}

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('clientReady', ()=> {
    console.log(`Bimbot is online and ready as ${client.user?.tag}`);
});

client.login(process.env.BIMBOT_TOKEN);

const activeUsers = new Set();



client.on("messageCreate", async (message)=>{
    
    if (message.author.bot) return;

    if (message.content === "/bimbot on"){
        activeUsers.add(message.author.id)
        message.reply("Teehee~ Bimbot is like totally on")
        return;
    }
    if (message.content === "/bimbot off"){
        activeUsers.delete(message.author.id)
        message.reply("Awww, Bimbot is off now")
        return;
    }
    if (!activeUsers.has(message.author.id)) return;

    if (!message.guild) return;
    const channel = message.channel as TextChannel;

    const webhooks = await channel.fetchWebhooks();
    let webhook = webhooks.find(wh => wh.owner?.id === client.user?.id);

    if (!webhook) {
        webhook = await channel.createWebhook({
            name: 'Bimbot Dynamic Webhook'
        });
    }
    
    const payload = {
        username: message.member?.displayName || message.author.username,
        avatar_url: message.author.displayAvatarURL(),
        original_text: message.content,
        webhook_url: webhook.url
    };

    try {
        await fetch(n8nWebhookUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });
        await message.delete()
    }

    catch (error) {
        console.error("Error conectando con el webhook de n8n:", error);
    }
});