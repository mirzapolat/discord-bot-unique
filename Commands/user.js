const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    if (!message.member.hasPermission(`ADMINISTRATOR`)) return message.reply(`:x: Du hast nicht die Berechtigung diesen Befehl auszuführen. Benötigte Berechtigung: **ADMINISTARTOR**`);
    else {    
        if (!args[0]) {
            let helpembed = new Discord.RichEmbed()
                .setDescription(`Benutzerverwaltungs Befehle\nMehr mit ${config.prefix}help`)
        
                .addField(".user kick @user <Grund>", "Kickt den Benutzer vom Server")
                .addField(".user ban @user <Grund>", "Bannt den Benutzer permanent vom Server")
                .addField(".user whoami", "Zeigt deine Discord-ID an")

                .setColor(0x3498db);
            
            message.channel.send(helpembed);
        }
        // Kick
        else if (args[0] == "kick") {
            if(!message.member.roles.some(r=>[`KICK_MEMBERS`].includes(r.name))) return message.reply(`:x: Du hast nicht Die Berechtigung diesen Befehl auszuführen. Benötigte Berechtigung: **KICK MEMBERS**`);
  
            let member = message.mentions.members.first() || message.guild.members.get(args[1]);
            if(!member) return message.reply("Bitte Markieren sie einen Benutzer");
            if(!member.kickable) return message.reply(`:x: Ich habe nicht die Berechtigung dies zu tun`);
  
            let reason = args.slice(2).join(' ');
            if(!reason) reason = `:x: Grund fehlt`;
            //await member.kick(reason).catch(error => message.author.send(`**Fehler Aufegtreten:**\n${error}`));
            
            member.kick(reason);

            let kickembed = new Discord.RichEmbed()
                .setTitle(`${member.user.tag} wurde von ${message.author.tag} vom Server gekickt!`)
                .setDescription(reason)
                .setColor(0xe74c3c);

            message.channel.send(kickembed);
        }
        // Ban
        else if (args[0] == "ban") {
            if(!message.member.roles.some(r=>[`BAN_MEMBERS`].includes(r.name))) return message.reply(`:x: Du hast nicht Die Berechtigung diesen Befehl auszuführen. Benötigte Berechtigung: **BAN MEMBERS**`);
  
            let member = message.mentions.members.first() || message.guild.members.get(args[1]);
            if(!member) return message.reply("Bitte Markieren sie einen Benutzer");
            if(!member.kickable) return message.reply(`:x: Ich habe nicht die Berechtigung dies zu tun`);
  
            let reason = args.slice(2).join(' ');
            if(!reason) reason = `:x: Grund fehlt`;
            //await member.ban(reason).catch(error => message.author.send(`**Fehler Aufegtreten:**\n${error}`));
            
            member.ban(reason);

            let banembed = new Discord.RichEmbed()
                .setTitle(`${member.user.tag} wurde von ${message.author.tag} permanent vom Server gebannt!`)
                .setDescription(reason)
                .setColor(0xe74c3c);

            message.channel.send(banembed);
        }
        // Whoami
        else if (args[0] == "whoami") {
            message.author.send(`:id: Deine ID ist ` + message.member.id);
        }
    }
}