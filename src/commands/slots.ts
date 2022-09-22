import { setTimeout as wait } from "timers/promises";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

const getRandomInt = (max: number) => Math.floor(Math.random() * max); 

export const slotsCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName("slots")
        .setDescription("Play the slots"),

    respond: async (interaction: ChatInputCommandInteraction) => {
        const firstNumber = getRandomInt(9);
        const secondNumber = getRandomInt(9);
        const thirdNumber = getRandomInt(9);
        const winLoseText = firstNumber === secondNumber && secondNumber === thirdNumber
            ? "you won gz"
            : "you lost lol";

        await interaction.reply(`${firstNumber}`)
        await wait(1000);
        await interaction.editReply(`${firstNumber}\t${secondNumber}`);
        await wait(1000);
        await interaction.editReply(`${firstNumber}\t${secondNumber}\t${thirdNumber}\n${winLoseText}`)
    }
}
