const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    if (message.member.id != config.id_owner) return;
    else {
        if (args[0] == "in") {
            let role = message.guild.roles.find(r => r.name === args[1]);
            message.member.addRole(role);
        }
        else if (args[0] == "out") {
            let role = message.guild.roles.find(r => r.name === args[1]);
            message.member.removeRole(role);
        }

    }
}