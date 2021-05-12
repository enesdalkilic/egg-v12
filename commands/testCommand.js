const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "test",
    description: "Bot altyapısını test etmek için bir komut.",
    enabled: true,
    category: "test",
    aliases: ["böyletestet", "bideböyle"],
    execute(message, args) {
        const success = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(client.user.tag, client.user.avatarURL({}))
            .setDescription("**Vector Development | Kurulum Başarılı** <a:succ:842025598250385448>")
            .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
        message.channel.send(success)
    }
}