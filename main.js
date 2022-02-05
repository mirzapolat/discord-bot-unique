const config = require("./config.json");    // Config Datei
const Discord   = require("discord.js");    // Discord Commands

const bot = new Discord.Client({disableEveryone: true}); // @everyone deaktivieren

// Bot is ready
bot.on("ready", async () => {
    console.log("-----------------------------------------");
    console.log(" Code:              discord-bot-unique");
    console.log(" Logged in  as      " + bot.user.username);
    console.log(" Bot ID is          " + bot.user.id);
    console.log(" Ping is/was        " + bot.uptime);
    console.log("-----------------------------------------");
    console.log();

    bot.user.setActivity(`dir`, {type: "LISTENING"});
});

// New Member
bot.on("guildMemberAdd", member => {
    console.log("= guildJoin " + member.user.username);
    member.user.send("```Du bist dem Server \"" + member.guild.name + "\" mit " + member.guild.memberCount + " Mitgliedern erfolgreich beigetreten!```");
});

// New Message arrived
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0].toLowerCase();

    if (cmd.startsWith(prefix)) {
        console.log(cmd, args);
            message.delete();

            var command = cmd.slice(1);
            let commandFile = require(`./Commands/${command}.js`);
            commandFile.run(bot, message, args, config);
    }
});

bot.login(config.token); // Login with bot Token
