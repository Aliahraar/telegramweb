const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const express = require("express");
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'coin.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// replace the value below with the Telegram token you receive from @BotFather
const token = '5959632379:AAGuCMDdqhOUHadISS2n79Iw8dTjzgYYvMs';

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const userInput = msg.text;
    const msg_id = msg.message_id;

    sent_message = await bot.sendMessage(chatId, userInput, {
        reply_to_message_id: msg_id,
    });

});

module.exports = app;