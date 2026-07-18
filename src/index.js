const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const connectMongo = require("./database/mongo");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`${client.user.tag} is online!`);
});

connectMongo();

client.login(process.env.TOKEN);
