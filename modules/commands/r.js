const Discord=require('discord.js');

module.exports.run = async (MAIN, message, args, prefix, city) => {
  if(message.member.hasPermission('ADMINISTRATOR')){
    process.exit(1).catch(console.error);
  }
}
