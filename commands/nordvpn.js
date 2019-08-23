const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const fs = require("fs");
const owners = require ('../Data/config.json');
const Accounts = require ('../Accounts/nordaccounts.json');

exports.run = async (client, message, args) => {
	
	let Cembed = new Discord.RichEmbed() 
      .setTitle("Hmm :thinking: To Fast!!")
      .setDescription(`<@${message.author.id}>` + " Please wait ``1 Minute`` before retyping this command. :shrug:")
      .setColor("0xff0000")
    message.delete().catch();
	
	 if (talkedRecently.has(message.author.id)) {
            message.channel.send(Cembed);
    } else {
	
    let result = Math.floor((Math.random() * Accounts.length));

    let dEmbed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("User has generated a account")
    .setDescription(`<@${message.author.id}>` + ` has generated a NordVPN account the account info is ${Accounts[result]}`)
     .setFooter(`© Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`);




    let Gembed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("Your NordVPN account")
    .setDescription(Accounts[result])
     .setFooter(`© Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`);	    

    let Membed = new Discord.RichEmbed()
    .setColor(53380)
    .setTitle("NordVPN Account generated")
    .setDescription(`<@${message.author.id}>` + "Your NordVPN account has been sent to your dms, Please check them if the account is a duplicate or doesn't work use the command again until it does")
    .setFooter(`© Ninja Gen`, `https://cdn.discordapp.com/avatars/614309964097388545/15cd8dd83d12e014fbe3aa17963d1c8f.png?size=256`)



    message.channel.send(Membed)
    message.author.send(Gembed)

    client.fetchUser('334235222193209348').then((user) => {
      user.send(dEmbed)
    });
	
	 client.fetchUser('334235222193209348').then((user) => {
      user.send(dEmbed)
    });
	
	  // Adds the user to the set so that they can't talk for a minute
talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
   
   
    }
