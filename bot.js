const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on("ready", () => {
  function lol() {
    client.guilds.get('499971880401371137').roles.find("name", "🅼🅴🅼🅱🅴🆁🆂").setColor("RANDOM");
  }
  setInterval(lol, 3000);
})


 
  












// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTE4MTY3NDU4NTI4NjI0NjYy.DuM09A.o5EEGx0sIRPHtN5CCRvEYJVAauo);
