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
   .setTitle("Generator Commands")
   .setColor("53380")
   .setDescription(`<@${message.author.id}>` + " Here is a list of my Generator commands and usage")
   .addField("Generator Categories", "``gen catergories`` - Shows all account categories and stock")
   .addField("Spotify Accounts", "``gen spotify`` - Generates a Spotify account and sends it to your DMs")
   .addField("Hulu Accounts", "``gen hulu`` - Generates a Hulu account and sends it to your DMs")
   .addField("Netflix Accounts", "``gen netflix`` - Generates a Netflix account and sends it to your DMs")
   .addField("CrunchyRoll Accounts", "``gen crunchyroll`` - Generates a CrunchyRoll account and sends it to your DMs")
   .addField("NordVPN Accounts", "``gen nordvpn`` - Generates a NordVPN account and sends it to your DMs")
   .setFooter(`Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`)
   .setThumbnail(`https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`)
   message.channel.send(hEmbed)
   message.delete().catch();
 };
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gencmds', 'gcmds'],
  permLevel: 0
};

exports.help = {
  name: 'ownercmds',
  description: 'Shows a list of all available owner commands',
  usage: 'gen helpcmds'
};
