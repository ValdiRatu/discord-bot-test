import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

export const addCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName('add')
        .addNumberOption(option => 
            option.setName('a')
                .setDescription('first number to add')
                .setRequired(true))
        .addNumberOption(option => 
            option.setName('b')
                .setDescription('second number to add')
                .setRequired(true))
        .setDescription('Adds two numbers together'),

    respond: async (interaction: ChatInputCommandInteraction) => {
        const a = interaction.options.getNumber('a');
        const b = interaction.options.getNumber('b');
        if (a && b) {
            await interaction.reply(`${a + b}`);
        } else {
            interaction.reply("Something went wrong ;_;");
        }
        
    }
}