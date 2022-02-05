const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    if (!args[0]) {
        let helpembed = new Discord.RichEmbed()
        .setDescription(`Botverwaltungs Befehle\nMehr mit ${config.prefix}help`)
        
        .addField(".bot nickname <nickname>", "Ändert den angezeigten Nicknamen des Bots")
        .addField(".bot leave", "Kickt den Bot vom Server")

        .setColor(0x3498db)
            
    message.channel.send(helpembed);
    }
    else if (args[0] == "nickname") {
        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`:x: Du hast nicht die Berechtigung um diesen Befehl auszuführen`);
        else {
            message.guild.members.get(bot.user.id).setNickname(args[1]);
            message.channel.send(`:white_check_mark: Nickname zu ${args[1]} geändert`);
        }
        
    }
    else if (args[0] == "leave") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`:x: Du hast nicht die Berechtigung um diesen Befehl auszuführen`);
        else {
            message.guild.leave();
        }
    }
}