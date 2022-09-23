
const telegramApi = require('node-telegram-bot-api');
const { а, б, в, г, д, е, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, ь, ю, я } = require('./letters');

const token = '5609303240:AAFoRCmKR10ZfCso_LW5UED0VR2JiVfdhWk'

const bot = new telegramApi(token, { polling: true });

var ukraineEmoji = '🇺🇦';

bot.on('message', msg => {
    const textMsg = msg.text;
    const chatId = msg.chat.id;
    if (textMsg === '/start') {
        bot.sendMessage(chatId, д(ukraineEmoji) + '\n\n' + е(ukraineEmoji));
    }

});