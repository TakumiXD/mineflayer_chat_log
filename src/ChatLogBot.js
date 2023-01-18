const fs = require('fs').promises;
const path = require('path');
const mineflayer = require('mineflayer');
const DateManager = require('./DateManager');

class ChatLogBot {
    constructor(port, username, timezone, languageFormat) {
        this.bot = mineflayer.createBot({
            host: "localhost",
            port: port,
            username: username
        });
        this.DateManager = new DateManager(timezone, languageFormat)
        this.initEventListeners();
        this.initChatListener();
    }

    initEventListeners() {
        this.bot.once('spawn', () => {
            console.log(`${this.bot.username} spawned`);
        });

        this.bot.on("death", () => {
            console.log(`${this.bot.username} died`);
        });

        this.bot.on("kicked", (reason, loggedIn) => {
            console.log(reason, loggedIn);
        });

        this.bot.on("error", err => {
            console.log(err)
        });
    }

    initChatListener() {
        // --- bot chat listener
        this.bot.on("chat", async (username, message) => {
            if (username == this.bot.username) return;

            this.onChat(username, message);
        });
    }

    async onChat(username, message) {
        let currDate = DateManager.getCurrentDate();
        let fileName = DateManager.getFullYear(currDate) + "-"+ DateManager.getMonth(currDate)
            + "-" + DateManager.getDate(currDate) + ".txt";
        let time = DateManager.getTime(currDate);
        let logMessage = time + ` <${username}> ` + `${message}` + "\n";
        await this.logChat(fileName, logMessage);
    }

    async logChat(fileName, logMessage) {
        try {
            await fs.appendFile(path.join(__dirname, 'output_files', fileName), logMessage);
        } catch(e) {
            console.log(`Failed to write message \"${logMessage}\" to file \"${fileName}\"`);
            console.log(e);
        }
    }
}

class Singleton {
    constructor(args) {
        if (!Singleton.instance) {
            Singleton.instance = new ChatLogBot(...args);
        }
        return Singleton.instance;
    }
}

module.exports = Singleton;
