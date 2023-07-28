# Chat Api - Websocket

```js
wss://ws.chatbot-ai.gq:8001

WebSocket w/ SSL
```
## Send to Server
```js
ws.send(JSON.stringify({
  time: new Date().getTime(),
  version: 'brock', // brock / game
  agent: 'user',
  type: 'text',
  extra: '',
  msg: "Hello"
}))
```

### Parameters

`version`: brock, game

`agent`: user, bot

`type`: text, button

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

### Parameters

`type`: text, button, news

`disableInput`: true, false

`options`: []

`news`: []

---

# Generage Chat Log txt

```js
api.chatbot-ai.gq/chat/pdf/

POST JSON w/ chatlog
```

# Niagara COVID status today
```js
niagara.krunk.cn/today-api.php

GET
```

# Brock News
```js
api.chatbot-ai.gq/data/brock/news
api.chatbot-ai.gq/data/brock/news/cache

GET
```

# Brock News Search
```js
api.chatbot-ai.gq/data/brock/news/search?s=

GET w/ text
```

# Canada Games 2022 News
```js
api.chatbot-ai.gq/data/game/news
api.chatbot-ai.gq/data/game/news/cache

GET
```

# Stats Api
```js
api.chatbot-ai.gq/stats/query?q=
api.chatbot-ai.gq/stats_array/query?q=

GET w/ dbquery
```