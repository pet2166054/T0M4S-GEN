//This is the bots required node modules, certain aspects of the code will not work without this.
const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("../Data/config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');

//This SHOULD allow us to use the "client, message & args" async functions.(Example: message.author.id)
exports.run = async (client, message, args) => {
 
//This is your Command or Discord Rich Embed code Line followed by the end of the command. OR close "}" bracket
  let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Support Commands")
   .setColor("0x0ffff")
   .setDescription(`<@${message.author.id}>` + " My general command usage can be found below")
   .addField("Report A Bug", "``gen bugreport {Reason}`` - Sends a message to the support server so the devs know about the bug you reported")
   .addField("Account/Stock Request", "``gen request {YourRequest}`` - Sends a message to the support server so the devs know what you requested")
   .addField("Support Server", "[Join Here](https://discordapp.com/invite/PVUgwVf)")
   .setFooter(`© Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`)
   .setThumbnail(`https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`)
   message.channel.send(hEmbed)
   message.delete().catch();	
 };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['helpcmds', 'hcmds'],
  permLevel: 0
};

exports.help = {
  name: 'helpcmds',
  description: 'Shows a list of all available help commands',
  usage: 'gen helpcmds'
};
