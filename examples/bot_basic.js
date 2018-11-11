const Discord = require('discord.js'); // Require the Discord.js library.

class Bot extends Discord.Client {
  constructor(options) {
    super(options);
    this.music = require("discord.js-musicbot-addon");
  }
}
const client = new Bot();

client.music.start(client, {
  youtubeKey: "YouTubeAPIKeyHere" // Set the api key used for YouTube.
});

client.login("NDk0NjE0NTI5NDE4OTg1NDcy.DsoQ0w.E56IvTLD5Ek8RTIeu3jKUyu3w30"); // Connect the bot.
