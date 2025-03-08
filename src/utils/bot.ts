import {Telegraf } from 'telegraf';
import { db } from '@/utils/db';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
    throw new Error('TELEGRAM_BOT_TOKEN is not defined');
}


const bot = new Telegraf(BOT_TOKEN);

bot.command('start', async (ctx) => {
    const user = ctx.from;
    // const url = "https://tgapp-dohv.onrender.com/";

    console.log('Информация о пользователе:', user);



    try {
        const newUser = await db.collection('users').insertOne({
            id: user.id,
            firstName: user.first_name,
            username: user.username,
        });
        console.log(newUser);
    } catch (e) {
        console.log('Ошибка при добавлении пользователя:', e);
    }

    // const keyboard = Markup.inlineKeyboard([
    //     [Markup.button.webApp('Открыть приложение', url)],
    // ]);

    ctx.reply(
        `Привет, ${user.first_name}! 👋\nНажми на кнопку, чтобы продолжить.`
    );
});

export { bot };
