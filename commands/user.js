const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Brinda el tiempo en el que el usuario se unio al servidor'),
	async execute(interaction) {
		await interaction.reply({ content: `${interaction.user.username} es miembro desde ${interaction.member.joinedAt}.`, ephemeral: true});
		console.log(interaction.member.joinedAt)
	},
};