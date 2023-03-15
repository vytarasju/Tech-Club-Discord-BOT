const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageReactionRemove,
	once: false,
	async execute(reaction, user) {
    if (user.bot ||
        !reaction.message.id === '1085557544979791934' ||
        !reaction.message.channelId === '1085557517586792478') return

    if (reaction.emoji.name == '👍') { //if the user reacted with the right emoji
        const role = reaction.message.guild.roles.cache.find(r => r.id === '1085521892443705434'); //finds role you want to assign (you could also user .name instead of .id)
        const { guild } = reaction.message //store the guild of the reaction in variable
        const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)
        member.roles.remove(role); //assign selected role to member
    }
  }
};
