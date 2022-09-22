import { Collection } from 'discord.js';
import type { DiscordBotSlashCommand } from './types';
import { fooCommand, echoCommand, addCommand } from './foo';
import { slotsCommand } from './slots';

const commands = new Collection<string, DiscordBotSlashCommand>();

commands.set(fooCommand.data.name, fooCommand);
commands.set(slotsCommand.data.name, slotsCommand);
commands.set(echoCommand.data.name, echoCommand);
commands.set(addCommand.data.name, addCommand);


export default commands;