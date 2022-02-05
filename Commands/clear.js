const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    try {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast nicht die Berechtigung diesen Befehl auszuführen...");
        if (args[0] > 20) return message.channel.send(`:x: Sie können nicht mehr als 20 Nachrichten auf einmal löschen...`);
        if (!args[0]) return message.channel.send(`:x: Kein Zahlenwert angegeben: clear <Wert>`);
    
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`:wastebasket: ${args[0]} Nachrichten gelöscht...`).then(msg => message.delete(5000));
        });
    } catch (error) {
        //nothing
    }
}