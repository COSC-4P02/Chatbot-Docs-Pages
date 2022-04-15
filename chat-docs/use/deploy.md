# Deploy on server

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## Frontend

<br>

<code-group>
<code-block title="YARN">
```bash
cd Frontend
yarn
yarn build
```
</code-block>
</code-group>

Upload `dist` folder to server

## Backend

### Run by NPM

<br>

<code-group>
<code-block title="NPM">
```bash
npm install
npm run serve
```
</code-block>
</code-group>

### Run by Docker

> Build Docker

```bash
docker build . -t krunk/chatbot-ai-backend
```

> Build with Multiple Architectures

```bash
docker buildx create --name krunkbuilder
docker buildx ls
docker buildx use krunkbuilder
```

```bash
docker buildx build . -t krunk/chatbot-ai-backend --platform=linux/arm64,linux/amd64 --push
```

> Run Docker

```bash
docker pull krunk/chatbot-ai-backend
docker run -d --name chatbot-ai-backend -p 8001:8001 -p 3000:3000 -v $(pwd)/chatbot-ai-backend/data:/usr/src/app/data krunk/chatbot-ai-backend
```
