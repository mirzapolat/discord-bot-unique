const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    message.reply(args.join(' '));
}