const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let fileRequest = await lib.http.request['@1.1.5']({
  method: 'GET',
  url: "https://azapie.public.files.stdlib.com/_stdlib/provider/AZapie/images/Purple%26Gold%20BengalBots.png"
});
let file = fileRequest.body;

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Here's Our Links!`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `BengalBots Links`,
      "description": "",
      "color": 0xff00e6,
      "fields": [
        {
          "name": "\u200B",
          "value": `[TigerLink](https://bit.ly/BengalBotsTigerlink)`,
          "inline": true
        },
        {
          "name": "\u200B",
          "value": `[GroupMe](https://groupme.com/join_group/67435224/68nfWRpY)`,
          "inline": true
        },
        {
          "name": "\u200B",
          "value": `[Discord](https://discord.gg/3jB8KXMcz6)`,
          "inline": true
        },
        {
          "name": "\u200B",
          "value": `[Instagram](https://www.instagram.com/bengal.bots/)`,
          "inline": true
        },
        {
          "name": "\u200B",
          "value": `[Github](https://github.com/bengalbotsLSU)`,
          "inline": true
        },
        {
          "name": "\u200B",
          "value": `[LinkTree](https://linktr.ee/bengalbots)`,
          "inline": true
        }
      ],
      "image": {
        "url": `https://raw.githubusercontent.com/AZapie/BengalBotsDiscordBot/main/Purple%26Gold%20BengalBots.png`,
        "height": 0,
        "width": 0
      }
    }
  ]
});
