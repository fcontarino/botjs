const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Muestra la cantidad de miembros en el servidor'),
	async execute(interaction) {
		await interaction.reply({ content: `El servidor ${interaction.guild.name} tiene ${interaction.guild.memberCount} miembros.`, ephemeral: true});
	},
};