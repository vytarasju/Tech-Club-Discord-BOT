//importing credentials from JSON file
const {TOKEN, GUILD_ID, CLIENT_ID} = require('./botCredentials.json')
//importing discord.js
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');

//Creates command tooltips when typing in the command
const commands = [
  {
    name: 'pang',
    description: 'Gives you a reply',
  },
  {
    name:'joke',
    description:'Replies with a joke',
  }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

//reloads the command tooltips (tooltips are stored locally in the server after definition)
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();


//Defining rules
const client = new Client({ intents: [7796] })


const {SlashCommandBuilder} = require('discord.js');
const {generateJoke} = require('./joke_generator.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'pang') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'joke') {
    await interaction.reply(generateJoke());
  }

  }
);

//Starting BOT
client.login(TOKEN);