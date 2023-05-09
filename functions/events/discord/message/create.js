// authenticates API stuff
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// If !status is executed in the chat by anyone the status is updated to "watching bengalbots"
if(context.params.event.content.includes("!status")) {
  lib.discord.users['@0.2.1'].me.status.update({
    activity_name: `🐯BengalBots🐯`,
    activity_type: 'WATCHING',
    status: 'ONLINE'
  });
}


//The Nell Bonker
if(context.params.event.author.username == ('Moonella')) {
  if((Math.floor(Math.random() * 100)) <= 2) {
    let result = await lib.discord.channels['@0.3.4'].messages.reactions.create({
      emoji: `<:dodgeball:1104215620452622377>`,
      message_id: `${context.params.event.id}`,
      channel_id: `${context.params.event.channel_id}` 
    });
  }
}
