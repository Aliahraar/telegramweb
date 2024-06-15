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

