const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on("ready", () => {
  function lol() {
    client.guilds.get('517778932271939605').roles.find("name", "MEMBERS").setColor("RANDOM");
  }
  setInterval(lol, 3000);
})


 
  












// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
