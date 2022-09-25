import { Collection } from 'discord.js';
import type { DiscordBotSlashCommand } from './types';
import { fooCommand } from './foo';
import { echoCommand } from './echo';
import { addCommand } from './add';
import { slotsCommand } from './slots';
import { rpsCommand } from './rps';
import { giveAwayCommand } from './giveaway';
import { owoCommand } from './owoCounter';

const commands = new Collection<string, DiscordBotSlashCommand>();

commands.set(fooCommand.data.name, fooCommand);
commands.set(slotsCommand.data.name, slotsCommand);
commands.set(echoCommand.data.name, echoCommand);
commands.set(addCommand.data.name, addCommand);
commands.set(rpsCommand.data.name, rpsCommand);
commands.set(giveAwayCommand.data.name, giveAwayCommand)
commands.set(owoCommand.data.name, owoCommand)


export default commands;