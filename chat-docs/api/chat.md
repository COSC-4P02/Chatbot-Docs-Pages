# Chat Api - Websocket

```js
wss://ws.chatbot-ai.ga:8001

WebSocket w/ SSL
```
## Send to Server
```js
ws.send(JSON.stringify({
  time: new Date().getTime(),
  version: 'brock', // brock / game
  agent: 'user',
  type: 'text',
  msg: value.text
}))
```
## Text Response
```js
{
  'type': 'text',
  'text': 'Hey there!',
  'disableInput': false
}
```
## Button Response
```js
{
  'type': 'button',
  'text': 'Here are some links',
  'options': [
    {
      'text': 'How to use Google',
      'value': 'https://google.com',
      'action': 'url'
    },
    {
      'text': "Not what I'm looking for",
      'value': 'result_not_match',
      'action': 'postback'
    }
  ],
  'disableInput': true
},
```

# User Enter Chat Log

```js
api.chatbot-ai.ga/log/enter/

GET
```

# Generage chat log pdf

```js
api.chatbot-ai.ga/chat/pdf/

POST JSON w/ chatlog
```

# Image Cache
```js
api.chatbot-ai.ga/image/...

GET with image name
```

# Niagara COVID status today
```js
niagara.krunk.cn/today-api.php

GET
```