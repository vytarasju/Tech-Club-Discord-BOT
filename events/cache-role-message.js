const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
    const guild = await client.guilds.fetch('1084157748779954247');
    const channel = guild.channels.cache.get('1085557517586792478');
    const message = await channel.messages.fetch('1085557544979791934');
	},
};
