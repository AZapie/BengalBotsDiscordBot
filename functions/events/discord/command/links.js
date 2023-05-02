// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
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
      "color": 0xff00d9,
      "fields": [
        {
          "name": `Join us on:`,
          "value": `[Tigerlink](https://bit.ly/BengalBotsTigerlink)`,
          "inline": true
        }
      ],
      "url": `https://linktr.ee/bengalbots`
    }
  ]
});