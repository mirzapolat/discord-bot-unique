const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    let bicon = bot.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
        .setTitle("Hier ist eine Liste von Befehlen:")
        .setDescription("Dieser Bot wurde von mirzamagix erstellt. \nOfficial Website: www.mirza-can.de\n")
        
        .addField(".info",                          "Liste von Informations-Befehlen")
        .addField(".bot",                           "Liste von Bot-Verwaltungsbefehlen")
        .addField(".role",                          "Liste von Rollen-Verwaltungsbefehlen")
        .addField(".user",                          "Liste von Benutzer-Verwaltungsbefehlen")
        .addField(".report <Nachricht>",            "Schickt eine Meldung mit deiner Nachricht an den Serverbesitzer")
        .addField(".apply <Nachricht>",             "Schickt eine Bewerbung an den Serverbesitzer")
        .addField(".say <Nachricht>",               "Antwortet dir mit deiner eigenen Nachricht")
        .addField(".clear <Anzahl>",                "Löscht eine bestimmte Anzahl an Nachrichten aus dem Textkanal\n(Maximale Anzahl: 20)")
        .addField(".dice",                          "Würfelt mit einem echten Würfel")
        .addField(".ping",                          "Ermittelt deinen Ping zum Discord Server")

        .setColor(0x3498db)
        .setThumbnail(bicon);
            
    message.channel.send(helpembed);
}