const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "yardım",                                           //<= Komutun ilk kullanılıcak ismi
    description: "Bot altyapısını test etmek için bir komut.",//<= Yardım komutu için açıklaması
    enabled: true,                                            //<= Komutun kullanılabilir olduğu (açık = true | kapalı false)
    category: "test",                                         //<= Yardım komutu için kategori
    aliases: ["böyletestet", "bideböyle"],                    //<= Ekstra kullanımları
    execute(message, args) {
        //Kodlar
    }
}