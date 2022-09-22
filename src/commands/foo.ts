import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

export const fooCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName("foo")
        .setDescription("Test command"),

    respond: async (interaction: ChatInputCommandInteraction) => {
        await interaction.reply("bar");
    }
}

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