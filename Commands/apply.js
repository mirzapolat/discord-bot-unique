const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    let applyembed = new Discord.RichEmbed()
        .setTitle("APPLY ARRIVE")
        .setDescription(
            "Meldung von: " + message.member.displayName + 
            "\n Datum: "    + message.createdAt + 
            "\nServer: "    + message.guild.name)
        .addField("Bewerbungsnachricht", args.join(' '))
        .setColor(0x2ecc71);

    bot.users.get(config.id_apply_arrive).send(applyembed);
}