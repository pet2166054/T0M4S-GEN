const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const owners = require ('../Data/config.json');

exports.run = async (client, message, args) => {
  
    
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Ninja Gen Invite")
   .setDescription(`<@${message.author.id}>` + " Interested in inviting me to your server? Use the link below")
   .setColor("0x0ffff")
   .addField("You Can Invite Me Here", "[Ninja Gen Invite Link](This is a private bot)")
    .setFooter(`Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`)
   .setThumbnail(`https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`);
   message.channel.send(hEmbed)
   message.delete().catch() 
}   
