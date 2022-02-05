const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    let reportembed = new Discord.RichEmbed()
        .setTitle("REPORT ARRIVE")
        .setDescription(
            "Meldung von: " + message.member.displayName + 
            "\n Datum: "    + message.createdAt + 
            "\nServer: "    + message.guild.name)
        .addField("Nachricht", args.join(' '))
        .setColor(0xe74c3c);

    bot.users.get(config.id_report_arrive).send(reportembed);
}