# Discord Bot Starter

This repo contains scripts that will configure a Discord bot using the library `discord.js`.

## Environment setup
Add a `.env` file with the following keys:
- `BOT_TOKEN`: Your bot's authentication token
- `CLIENT_ID`: Your application's ID
- `GUILD_ID`: Your server's ID

Run `npm install` or `yarn install` to download dependencies

## Running the scripts
- `npm run start` or `yarn start` syncs the bot's commands then starts the bot and signs it into Discord
- `npm run deploy-commands` or `yarn deploy-commands` will sync the commands you added to the bot
- `npm run delete-commands` or `yarn delete-commands` will remove all commands previously added

## Adding a new command

1. Create a command according to the `DiscordBotSlashCommand` [interface](https://github.com/kobili/discord-bot-starter/blob/main/src/commands/types.ts) ([example](https://github.com/kobili/discord-bot-starter/blob/main/src/commands/foo.ts))
2. Add the new command to the `commands` Collection found [here](https://github.com/kobili/discord-bot-starter/blob/main/src/commands/index.ts)
3. Run the `deploy-commands` script to sync the new command to your bot