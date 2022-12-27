const fs = require('fs').promises;
const path = require('path');
const mineflayer = require('mineflayer');
const md = require('./manageDate');

// --- bot server and login information
const PORT_NUMBER = 12345; // -=CHANGEME=- the port number of minecraft server
const BOT_USERNAME = "Chat_Log"; // -=CHANGEME=- the in game name of the bot
const settings = {
	host: "localhost",
	port: PORT_NUMBER,
	username: BOT_USERNAME,
};

const TIMEZONE = "America/Los_Angeles"; // -=CHANGEME=- the timezone used to log the chat
const bot = mineflayer.createBot(settings);

// -- basic bot event listeners
bot.once('spawn', () => {
    console.log(`${BOT_USERNAME} spawned`);
    md.setTimezone(TIMEZONE);
});
bot.on("death", () => console.log(`${BOT_USERNAME} died`));
bot.on("kicked", (reason, loggedIn) => console.log(reason, loggedIn));
bot.on("error", err => console.log(err));

async function logChat(fileName, logMessage) {
    try {
        await fs.appendFile(path.join(__dirname, 'output_files', fileName), logMessage);
    } catch(e) {
        console.log(e);
    }
}

// --- bot chat listener
bot.on("chat", async (username, message) => {
	if (username == BOT_USERNAME) return;

    let cd = md.getCurrentDate();
    let fileName = md.getFullYear(cd) + "-"+ md.getMonth(cd) + "-" + md.getDate(cd) + ".txt";
    let time = md.getTime(cd);
    let logMessage = time + ` <${username}> ` + `${message}` + "\n";
    await logChat(fileName, logMessage);
});