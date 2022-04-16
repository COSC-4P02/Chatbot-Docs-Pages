# Deploy on Server

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

or

- [Docker](https://www.docker.com/)

# Frontend

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

Upload `dist` folder to server or deploy on GitHub Pages



# Backend

## Choice 1: Run Natively

### Run by NPM

<br>

<code-group>
<code-block title="NPM">
```bash
cd Backend
npm install
npm run serve
```
</code-block>
</code-group>


## Choice 2: Build and Run on Docker

### Build Docker Image

> Build with Default Config

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

### Run Docker Container

[krunk/chatbot-ai-backend](https://hub.docker.com/r/krunk/chatbot-ai-backend)

```bash
docker pull krunk/chatbot-ai-backend
docker run -d --name chatbot-ai-backend -p 8001:8001 -p 3000:3000 -v $(pwd)/chatbot-ai-backend/data:/usr/src/app/data krunk/chatbot-ai-backend
```

## Choice 3: Run on Docker with Azure VM

### System Requirements:
- CPU: 1 vcpu is minimum, 2 vcpu is recommended
- Memory: 512M or more is minimum, 1G or more is recommended
- Hard disk: More than 100M available hard disk space
- System: CentOS 7.1+

When creating the VM, allow port `80`, `443` and `22`

go to `Network security groups` on Azure portal, enable port `3000` and `8001`

ssh into the VM

install `aapanel`

```bash
yum install -y wget && wget -O install.sh http://www.aapanel.com/script/install_6.0_en.sh && bash install.sh forum
```

login into panel `http://ip:8888/entrycode`

Under `App Store` tab on the left sidebar, download and install `Nginx` `Docker Manager`

Open `Terminal` tab on the left sidebar and run the following commands

```bash
cd /www/wwwroot/
sudo docker run -d --name chatbot-ai-backend -p 8001:8001 -p 3000:3000 -v $(pwd)/chatbot-ai-backend/data:/usr/src/app/data krunk/chatbot-ai-backend
sudo docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower -i 60
sudo iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT
sudo iptables -I INPUT -p tcp -m tcp --dport 3000 -j ACCEPT
sudo iptables -I INPUT -p tcp -m tcp --dport 8001 -j ACCEPT
```

Under `Website` tab on the left sidebar

Create two new website `api.chatbot-ai.ga` `ws.chatbot-ai.ga` and request SSL from letsencrypt

Click on `api.chatbot-ai.ga` and select `Reverse proxy` tab on the left sidebar and `Add reverse proxy`

```
Proxy name: api.chatbot-ai.ga
Target URL: http://127.0.0.1:3000
Sent Domain: $host
```

Click `Submit`

Now, try to visit `api.chatbot-ai.ga`, if it is showing `404 Not Found`, then the server is ready to use.

