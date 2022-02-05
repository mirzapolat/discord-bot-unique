const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    message.channel.send("Pinging...").then(function(m) {
        m.edit(`:ping_pong: **Pong!** - Verzögerung: ${bot.ping} ms`)
    });
}