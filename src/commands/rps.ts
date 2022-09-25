import { APIApplicationCommandOptionChoice, ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
import { DiscordBotSlashCommand } from "./types";
import { setTimeout as wait } from 'timers/promises'

enum RPS {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors'
}

const chooseRPS = (): RPS => {
  const randInt = Math.floor(Math.random()*3)
  switch (randInt) {
    case 0:
      return RPS.Rock
    case 1:
      return RPS.Paper
    case 2:
      return RPS.Scissors
  }
  return RPS.Rock
}

const isWinner = (choice1: RPS, choice2: RPS): number => {
  switch(choice1) {
    case RPS.Rock:
      return choice2 === RPS.Paper ? 0 :
        choice2 === RPS.Scissors ? 1 : 2
    case RPS.Paper:
        return choice2 === RPS.Scissors ? 0 :
        choice2 === RPS.Rock ? 1 : 2 
    case RPS.Scissors:
      return choice2 === RPS.Rock ? 0 :
      choice2 === RPS.Paper ? 1 : 2
  }
}

const choices: APIApplicationCommandOptionChoice<string>[] = [
  { value: RPS.Rock, name: RPS.Rock },
  { value: RPS.Paper, name: RPS.Paper },
  { value: RPS.Scissors, name: RPS.Scissors }
]

export const rpsCommand: DiscordBotSlashCommand = {
  data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('play rock paper scissors')
    .addStringOption((option) => option
      .setName('choice')
      .setDescription('rock, paper, or scissors!')
      .setRequired(true)
      .addChoices(...choices)),

  respond: async (interaction: ChatInputCommandInteraction) => {
    const choice = chooseRPS()
    const userChoice = interaction.options.getString('choice') as RPS
    await interaction.reply(`ROCK`)
    await wait(500)
    await interaction.editReply(`ROCK \nPAPER`)
    await wait (500)
    await interaction.editReply(`ROCK \nPAPER \nSCISSORS`)
    await wait(1000)
    await interaction.editReply(`ROCK \nPAPER \nSCISSORS\n${interaction.user.username} chose: ${userChoice}`)
    await interaction.editReply(`ROCK \nPAPER \nSCISSORS\n${interaction.user.username} chose: ${userChoice}\nI chose: ${choice}`)
    await wait(1000)
    switch(isWinner(choice, userChoice)) {
      case 0:
        await interaction.followUp('you won :triumph:')
        break
      case 1:
        await interaction.followUp('I won :sunglasses:')
        break
      case 2:
        await interaction.followUp('looks like we tied :pensive:') 
        break
    }

  }
}