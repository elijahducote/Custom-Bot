const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {

  if(message.content == 'help') {
      message.reply('How may I help you?');
  }

});

client.login(process.env.BOT_TOKEN);
