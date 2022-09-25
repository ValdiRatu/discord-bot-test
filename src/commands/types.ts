import type { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export interface DiscordBotSlashCommand {
    data: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
    respond: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
