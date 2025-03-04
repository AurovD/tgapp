import { createNextApiHandler } from '@trpc/server/adapters/next';
import { router } from '@/utils/api';
// import { bot } from '@/utils/bot';


import { Markup, Telegraf } from 'telegraf';
import { db } from '@/utils/db';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
    throw new Error('TELEGRAM_BOT_TOKEN is not defined');
}


const bot = new Telegraf(BOT_TOKEN);

bot.command('start', async (ctx) => {
    const user = ctx.from;
    const url = "https://tgapp-dohv.onrender.com/";

    console.log('Информация о пользователе:', user);


    try {
        const newUser = await db.collection('users').insertOne({ login: user.username });
        console.log(newUser);
    } catch (e) {
        console.log('Ошибка при добавлении пользователя:', e);
        throw new Error('Ошибка при добавлении пользователя');
    }

    const keyboard = Markup.inlineKeyboard([
        [Markup.button.webApp('Открыть приложение', url)],
    ]);

    ctx.reply(
        `Привет, ${user.first_name}! 👋\nНажми на кнопку, чтобы продолжить.`,
        keyboard
    );
});

bot.launch();

export type AppRouter = typeof router;

export default createNextApiHandler({
    router,
});

