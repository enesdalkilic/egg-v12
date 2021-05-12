const Discord = require("discord.js"),
    fs = require("fs"),
    client = new Discord.Client();

require("dotenv").config();


//Global Variables

global.client = client;

client.settings = {
    "prefix": "!"
}

//Ready
client.once("ready", () => {

    console.log("Altyapı Başarılı ile kuruldu | Vector Development \n" + client.commands.size + " komut yüklendi!");
});

//Loading Commands
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    files.forEach(file => {
        if (file.endsWith(".js")) {
            var commandProps = require("./commands/" + file);
            var commandName = commandProps.name;
            client.commands.set(commandName, commandProps)
        } else {
            fs.readdir("./commands/" + file, (err, filesB) => {
                if (err) return;
                filesB.forEach(fileB => {
                    if (fileB.endsWith(".js")) {

                        var commandProps = require("./commands/" + file + "/" + fileB);
                        var commandName = commandProps.name;
                        client.commands.set(commandName, commandProps)
                    } else {
                        return;
                    }
                });
            });
        }
    });
});

client.on("message", message => {
    if (message.content.startsWith(client.settings.prefix)) {
        var command = message.content.slice(client.settings.prefix.length).trim().split(/ +/g);
        var commandName = command[0];
        var args = command.slice(1);
        var cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if(cmd.enabled != true) return;
        cmd.execute(message, args)
    }
});

client.login(process.env.TOKEN);