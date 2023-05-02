// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

lib.discord.users['@0.2.1'].me.status.update({
  activity_name: `B^3 🐯`,
  activity_type: 'COMPETING',
  status: 'ONLINE'
});

//message executed to signify the status was set
await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `Updated the Status!`
});