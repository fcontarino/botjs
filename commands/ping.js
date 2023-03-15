const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	},
};

// if (interaction.commandName === 'ping') {
// 	await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
// }