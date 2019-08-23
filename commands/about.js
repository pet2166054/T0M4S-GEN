//Required Node Modules go here!
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const Regex = require('regex');
const Reg = require('regex');
const moment = require('moment');
const owners = require('../Data/config.json');
const config = require('../Data/config.json');

//This tells the bot to execute these async functions
exports.run = async (client, message, args) => {
 
//This defines functions for certain args and executions   
   let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
    if (!muser) muser = message.member;
    if(!user) user = message.author;

//These lines are used to define The "Owners", "Devs" and the "Bot" Itself
//Helps when wanting to @Mention in embeds or messages.	
   let owner = client.users.get('334235222193209348'); //T0M4S#2560
   let dev = client.users.get('334235222193209348'); //T0M4S#2560
   let bot = client.users.get('614309964097388545'); //T0M4S GEN#5892

//This is the message embed (What the bot sends in discord) When the command is executed    
message.delete().catch();
   let aEmbed = new Discord.RichEmbed()
   .setTitle("About Ninja Gen")
   .setThumbnail("https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256")
   .setColor("#0x3dfbff")
   .addField("Bot Author", `${owner}`, true)
   .addField("Author Tag", `${config.ownerName}`, true)
   .addField("Code Library", "[discord.js](https://discord.js.org/#/)", true)
   .addField('Current Status', `${client.user.presence.status.toUpperCase()}`, true)
   .addField('Current Game', `${client.user.presence.game === null ? "No Game" : client.user.presence.game.name}`, true)
   .addField('Bot Creation Date', `${moment(client.user.createdAt).toString().substr(0, 15)}\n(${moment(client.user.createdAt).fromNow()})`, true)        
   .addField("Current Version", "[Beta Release](https://github.com/fossabot/NinjaGen)", true)
   .addField("Ninja Gen Support", "[Support Server](https://discordapp.com/invite/PVUgwVf)", true)
   .setFooter(`© Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`);
   message.channel.send(aEmbed)
}   //This is the end of our command :(
