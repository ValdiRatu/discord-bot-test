import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

// example of a slash command with a required parameter
export const echoCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .addStringOption(option => 
            option.setName("input")
                .setDescription("The input to echo back")
                .setRequired(true))
        .setDescription("Echos back your input"),
    
    respond: async (interaction: ChatInputCommandInteraction) => {
        await interaction.reply(`${interaction.options.getString("input")}`)
    }
}
