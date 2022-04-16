# Edit the Config of Chatbot Backend

## Upload SSL Certificate for WebSocket

The default certificate will be generated after first run, but it should not be used, it is only used by development, you should upload your own one

- Npm

`./Backend/data/cert/cert.pem`
`./Backend/data/cert/key.pem`

- Docker

`/usr/src/app/data/cert/cert.pem`
`/usr/src/app/data/cert/key.pem`

## Config.js

`config.js` is located in `./Backend/data/config.js` after first run

( Docker: `/usr/src/app/data/config.js` )

```js
var config = {};

// WebSocket Port
config.WebSocketPort = 8001;

// Api Service Port
config.apiServicePort = 3000;

// Api Service CORS
config.corsAllowedOrigins = ["http://localhost:1901", "http://localhost:3010"];

// SSL Cert
config.wsKey = "data/cert/key.pem";
config.wsCert = "data/cert/cert.pem";

// Error Log Location
config.loggerInfo = "data/logs/chatbot-info.log";
config.loggerError = "data/logs/chatbot-error.log";

// NLP.JS
config.nlpThreshold = 0.5;

// Database Main Location
config.databaseLocMain = "data/database/chatbot-data-main.cdb";

// Database Temp Location
config.databaseLocCache = "data/database/chatbot-data-cache.cdb";

// Discord Bot Config
config.enableDiscord = 0;
config.discord = "";
config.discordBrock = "";
config.discordGame = "";

// Faceebook Bot Config
config.enableFB = 0;
config.FB_brock = {
  pageID: "",
  appID: "",
  appSecret: "",
  validationToken: "",
  pageToken: "",
};
config.FB_game = {
  pageID: "",
  appID: "",
  appSecret: "",
  validationToken: "",
  pageToken: "",
};

module.exports = config;

```