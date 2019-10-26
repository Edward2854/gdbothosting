// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`${client.guilds.size} 서버, ${client.channels.size}명의 사람 | =도움`);
});


client.on('message', function(message){
  if (message.content === '=도움') {
      const embed = new RichEmbed()
      .setTitle('0.1베타')
      .setColor(0xFF0000)
      .setDescription('현재 명령어에는 =도움, =정보,=업타임(미개발), =서버이름이 있습니다.');
    message.channel.send(embed);
}
 if(message.content === '=정보'){
message.channel.send(`니 이름: ${message.author.username}\n니 아이디: ${message.author.id}`);
}
})

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

client.on('message', msg => {
  if (msg.content === '=업타임') {
    msg.reply(`업타임 = ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`);
  }
});

client.on('message', function(message){
if(message.content === '=서버이름'){
message.channel.send(`서버 이름: ${message.guild.name}`);
}
});


client.on('message', function(message){
if(message.content === '=서버정보'){
message.channel.send(`서버이름 : ${message.guild.name}\n유저 수: ${message.guild.memberCount}`);
}
});

client.login('NjMxNDEzMzkyMjEyNDkyMjg4.XaXH8w.hqPgUbS7G6o4BwBxSf9ABPFxFqQ');
