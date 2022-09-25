import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder, Colors } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

/**
 * this could be done better if the bot were to instead listen to all chat events
 * and see if the message contains owo but that's probably out of scope for our 
 * bot dsl
 */
let owoCounter = 0;
export const owoCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName("owo")
        .setDescription("increase the owo counter by 1")
        .addUserOption((options) => options
          .setName('user')
          .setDescription('user who has owo\'d')
          .setRequired(true)),
    
    respond: async (interaction: ChatInputCommandInteraction) => {
      owoCounter += 1;
      const user = interaction.options.getUser('user');
      if (!user) {
        await interaction.reply('Failed to get user')
        return
      }
      const embed = new EmbedBuilder()
      .setAuthor({ name: user.username, iconURL: user.displayAvatarURL() })
      // .setThumbnail(pickedUser.avatarURL())
      .setTitle('HAS OWO\'D')
      .setDescription(`There has now been **${owoCounter}** owo's in this server`)
      .setColor(Colors.Aqua)

      await interaction.reply({ embeds: [embed]})
    }
}
