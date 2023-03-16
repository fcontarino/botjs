const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout; //needed to wait

module.exports = {
	data: new SlashCommandBuilder()
		.setName('defping')
		.setDescription('Replies with Deferred Pong!'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral:true }); //bot is thinking
		await wait(5000); //ms to wait
		await interaction.editReply("Deferred pong"); //this edit the reply
	},
};