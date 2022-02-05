const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    if (!message.member.hasPermission("MENAGE_ROLES")) {
        return message.reply(`:x: Du hast nicht die Berechtigung diesen Befehl auszuführen...`);
    }
    else {
        if (!args[0]) {
            let helpembed = new Discord.RichEmbed()
                .setDescription(`Rollenverwaltungs Befehle\nMehr mit ${config.prefix}help`)
            
                .addField(".role in <rolle>", "Fügt den Benutzer der Jeweiligen Rolle hinzu.\nKann nur auf sich selbst benutzt werden")
                .addField(".role out <rolle>", "Entfernt den Benutzer von der Jeweiligen Rolle.\nKann nur auf sich selbst benutzt werden")
    
                .setColor(0x3498db)
                
            message.channel.send(helpembed);
        }
        else if (args[0] == "in") {
            let role = message.guild.roles.find(r => r.name === args[1]);
            message.member.addRole(role);
        }
        else if (args[0] == "out") {
            let role = message.guild.roles.find(r => r.name === args[1]);
            message.member.removeRole(role);
        }

    }
}