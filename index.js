require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const commandPrefix = "!";

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(commandPrefix)) return;

  const commandBody = msg.content.slice(commandPrefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "scrum") {
      msg.channel.send("", {files: ["./resources/scrumtime.png"] });
  }

});
