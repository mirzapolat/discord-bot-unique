const Discord   = require("discord.js");

exports.run = (bot, message, args, config) => {
    var roll = Math.floor(Math.random() * 6) + 1;
    let botembed = new Discord.RichEmbed()
        .setTitle("Der Würfel")
        .setDescription("Du hast eine " + roll + " gewürfelt")
        .setColor(0x2ecc71);
            
    message.channel.send(botembed);
}