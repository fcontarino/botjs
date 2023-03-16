const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout; //needed to wait

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
		await wait(2000); //ms to wait
		await interaction.editReply("pong again"); //this edit the reply
	},
};

// if (interaction.commandName === 'ping') {
// 	await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
// }