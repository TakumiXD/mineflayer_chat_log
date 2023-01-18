const ChatLogBot = require("./src/ChatLogBot");
const config = require("./config.json");

const args = [
    config.settings.port,
    config.settings.username,
    config.settings.timezone,
    config.settings.dateLanguageFormat
]

const bot = new ChatLogBot(args);