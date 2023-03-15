const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageReactionAdd,
	once: false,
	async execute(reaction, user) {
    console.log('activated')
    if (reaction.partial) { //this whole section just checks if the reaction is partial
      try {
          await reaction.fetch(); //fetches reaction because not every reaction is stored in the cache
      } 
      
      catch (error) {
          console.error('Fetching message failed: ', error);
          return;
      }
    }
    if (!user.bot) {
      if (reaction.emoji.id == '👍') { //if the user reacted with the right emoji

          const role = reaction.message.guild.roles.cache.find(r => r.id === 1085521892443705434); //finds role you want to assign (you could also user .name instead of .id)

          const { guild } = reaction.message //store the guild of the reaction in variable

          const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)

          member.roles.add(role); //assign selected role to member

      }
    }
  }
};
