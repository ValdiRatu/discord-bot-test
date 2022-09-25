import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder, Colors } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";
import { sample } from 'lodash'

export const giveAwayCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('picks a random user from a role in the channel to win')
        .addRoleOption((options) => options
          .setRequired(true)
          .setName('role')
          .setDescription('the people from this role will be part of the giveaway'))
        .addStringOption((options) => options
          .setName('item')
          .setDescription('item you want to give away')),

    respond: async (interaction: ChatInputCommandInteraction) => {
      const role = interaction.options.getRole('role')
      if (!role) {
        interaction.reply(`Failed to find role: ${role}`)
        return 
      }

      const users = (await interaction.guild?.roles.fetch(role.id))?.members.map(m => m)
      const pickedUser = sample(users)
      if (!pickedUser) {
        interaction.reply('failed to pick a user')
        return
      }

      const item = interaction.options.getString('item')
      
      const embed = new EmbedBuilder()
        .setAuthor({ name: pickedUser.displayName, iconURL: pickedUser.displayAvatarURL()})
        // .setThumbnail(pickedUser.avatarURL())
        .setTitle('IS THE WINNER OF THE GIVEAWAY')
        .setDescription(`<@${pickedUser.id}> congratulations! ${item ? `you won a(n) ${item}` : ''}`)
        .setColor(Colors.Blurple)
      
      await interaction.reply({ embeds: [embed] })
    }
}