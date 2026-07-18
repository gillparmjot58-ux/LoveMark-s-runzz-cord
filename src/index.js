const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const connectMongo = require("./database/mongo");
const commandHandler = require("./handlers/commandHandler");
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

commandHandler(client);
eventHandler(client);

connectMongo();

client.login(process.env.TOKEN);
