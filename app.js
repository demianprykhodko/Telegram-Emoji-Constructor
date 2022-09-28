
const telegramApi = require('node-telegram-bot-api');
require('dotenv').config();
const { а, б, в, г, д, е, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ч, ш, ь, ю, я } = require('./letters');

const token = '5609303240:AAFoRCmKR10ZfCso_LW5UED0VR2JiVfdhWk'

const bot = new telegramApi(process.env.token, { polling: true });

var ukraineEmoji = '🇺🇦';
var emojiSentence = '';
bot.on('message', msg => {
    const textMsg = msg.text;
    const chatId = msg.chat.id;
    if (textMsg === '/start') {
        bot.sendMessage(chatId, 'Enter a phrase');
        bot.on('message', msg => {
            const phrase = msg.text;
            for (let index = 0; index < phrase.length; index++) {
                const letter = window[phrase.charAt(index)];
                console.log(letter);
                // console.log(letter(ukraineEmoji));
            }
        });
    }

});