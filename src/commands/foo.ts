import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

// example of a basic slash command
export const fooCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName("foo")
        .setDescription("Test command"),

    respond: async (interaction: ChatInputCommandInteraction) => {
        await interaction.reply("bar");
    }
}

