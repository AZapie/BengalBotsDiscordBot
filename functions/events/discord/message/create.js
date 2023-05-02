// authenticates API stuff
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//code checks for the message "!status" and only runs if it exists

if(context.params.event.content.includes("!status")) {

  lib.discord.users['@0.2.1'].me.status.update({
    activity_name: `🐯BengalBots🐯`,
    activity_type: 'WATCHING',
    status: 'ONLINE'
  });

  //message executed to signify the status was set
  return lib.discord.channels['@0.2.0'].messages.create({
    channel_id: '${context.params.event.channel_id}',
    content: 'Status has been set.'
  })
}
