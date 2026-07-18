module.exports = {
    name: "interactionCreate",

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.log(error);

            if (!interaction.replied) {
                await interaction.reply({
                    content: "Command execute karte time error aa gaya.",
                    ephemeral: true
                });
            }
        }
    }
};
