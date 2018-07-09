/* Discord.js [my first bot] - Example */

const Discord = require("discord.js")
const bot = new Discord.Client();

bot.on("ready", () => {
	console.log("Tu bot ("+bot.user.tag+") ahora se encuentra en línea!")
})

bot.on("message", async message => {
  const prefix = "$";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "help"){
  	message.channel.send("**Hola! Tu bot está perfectamente recibiendo mensajes.**\n¿Tienes dudas sobre como modificarlo más? Visita la documentación: https://scripthubteam.github.io/docs/#/js/discord-js")
  	return;
  }
})

bot.login("EL TOKEN DEL BOT VA ENTRE ESTAS COMILLAS")