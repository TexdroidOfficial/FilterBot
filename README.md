# Discord AI Webhook Bot

English / Español

A Discord bot that listens for messages from selected users, forwards them to an n8n workflow, and sends the AI-generated response back to Discord via a webhook. The backend integrates with Ollama to handle the model inference, while the Discord client acts as the interface.

This project is designed as a portfolio piece to demonstrate a practical automation flow combining Discord, n8n, and local AI inference.

## English

### Overview

This project creates a Discord bot that:

- listens for commands like `/bimbot on` and `/bimbot off`
- allows a user to enable the bot for their own messages
- forwards the message content to an n8n webhook
- sends a generated response back to the Discord channel using a Discord webhook
- uses a local Ollama model for the AI layer

### Architecture

- Discord bot: receives the message and manages activation state
- n8n: handles the workflow orchestration and AI request
- Ollama: runs the local language model
- Discord webhook: posts the AI response back to the original channel

### Flow

1. A user enables the bot with `/bimbot on`.
2. The Discord bot intercepts the user's message.
3. The bot creates or reuses a webhook for the channel.
4. The message payload is sent to an n8n endpoint.
5. n8n calls the selected Ollama model.
6. The AI result is returned to Discord as a webhook post.
7. The original message is removed to keep the chat clean.

### Technologies

- Node.js
- TypeScript
- Discord.js
- n8n
- Ollama
- dotenv

### Project Structure

```text
.
├── .env.example
├── .gitignore
├── index.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

or with pnpm:

```bash
pnpm install
```

3. Copy the example environment file and configure the variables:

```bash
cp .env.example .env
```

4. Add your Discord bot token and webhook endpoint.

### Environment Variables

```env
BIMBOT_TOKEN=your_discord_bot_token_here
N8N_WEBHOOK_URL=http://localhost:5678/webhook/your-webhook-id
```

### Run

```bash
npm run build
npm start
```

### Notes

- The project intentionally avoids exposing any sensitive prompts or internal configuration in the repository.
- The repository is focused on the automation and integration architecture rather than adult-themed content.
- This is meant to be portfolio-friendly and professional.

## Español

### Visión general

Este proyecto crea un bot de Discord que:

- escucha comandos como `/bimbot on` y `/bimbot off`
- permite activar el bot para mensajes de un usuario específico
- reenvía el contenido del mensaje a un webhook de n8n
- publica la respuesta generada por IA en el canal de Discord mediante un webhook
- usa un modelo local de Ollama para la capa de inteligencia artificial

### Arquitectura

- Bot de Discord: recibe el mensaje y gestiona el estado activo/inactivo
- n8n: orquesta el flujo de trabajo y la solicitud a la IA
- Ollama: ejecuta el modelo de lenguaje local
- Webhook de Discord: publica la respuesta generada en el canal original

### Flujo

1. Un usuario activa el bot con `/bimbot on`.
2. El bot de Discord intercepta el mensaje del usuario.
3. El bot crea o reutiliza un webhook del canal.
4. El payload del mensaje se envía a un endpoint de n8n.
5. n8n llama al modelo seleccionado en Ollama.
6. El resultado se devuelve a Discord como un mensaje webhooks.
7. El mensaje original se elimina para mantener el chat ordenado.

### Tecnologías

- Node.js
- TypeScript
- Discord.js
- n8n
- Ollama
- dotenv

### Estructura del proyecto

```text
.
├── .env.example
├── .gitignore
├── index.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

### Instalación

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

o con pnpm:

```bash
pnpm install
```

3. Copia el archivo de entorno de ejemplo y configura las variables:

```bash
cp .env.example .env
```

4. Agrega tu token del bot de Discord y el endpoint del webhook.

### Variables de entorno

```env
BIMBOT_TOKEN=tu_token_del_bot_de_discord
N8N_WEBHOOK_URL=http://localhost:5678/webhook/tu-webhook-id
```

### Ejecución

```bash
npm run build
npm start
```

### Notas

- El proyecto evita exponer prompts sensibles ni configuraciones internas en el repositorio.
- El repositorio está orientado a la arquitectura de automatización e integración, no a contenido adulto.
- Está pensado para ser profesional y apto para un portafolio.

## License

MIT

## Contact

If you want to connect or discuss this project, feel free to reach out through GitHub.

Si quieres conectar o hablar sobre este proyecto, no dudes en contactarme a través de GitHub.
