// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//updates status to "watching Bengalbots"  
// lib.discord.users['@0.2.1'].me.status.update({
  // activity_name: `BengalBots🐯`,
  // activity_type: 'WATCHING',
  // status: 'ONLINE'
// });

lib.discord.users['@0.2.1'].me.status.clear();

//message executed to signify the status was set
await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `Cleared Custom Status!`
});
