const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    if (!args[0]) {
        let helpembed = new Discord.RichEmbed()
        .setDescription(`Informations Befehle\nMehr mit ${config.prefix}help`)
        
        .addField(".info bot", "Zeigt Informationen über den Unique Bot an")
        .addField(".info server", "Zeigt Informationen über den aktuellen Discord Server an")

        .setColor(0x3498db)
            
    message.channel.send(helpembed);
    }
    else if (args[0] == "bot") {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setTitle("Info zum Bot")
            .setDescription("Dieser Bot wurde von mirzamagix erstellt. \nOfficial Website: www.mirza-can.de")
            .addField("Bot Name", bot.user.username)
            .addField("Developer", "mirzamagix")
            .setColor(0x3498db)
            .setThumbnail(bicon);
            
        message.channel.send(botembed);
    }
    else if (args[0] == "server") {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setTitle("Info zum Server")
            .setDescription("Hier sehen sie informationen zu diesem Discord Server...")
            .addField("Server Name", message.guild.name)
            .addField("Erstellt am ", message.guild.createdAt)
            .addField("Anzahl der Mitglieder", message.guild.memberCount)
            .setColor(0x3498db)
            .setThumbnail(sicon);
            
        message.channel.send(serverembed);
    }
}