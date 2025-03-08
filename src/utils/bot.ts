import { Telegraf } from 'telegraf';
import { connectDb } from '@/utils/db';
import UserModel from '../models/userSchema';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
    throw new Error('TELEGRAM_BOT_TOKEN is not defined');
}

const bot = new Telegraf(BOT_TOKEN);

// Подключаемся к базе данных
connectDb();

bot.command('start', async (ctx) => {
    const user = ctx.from;

    console.log('Информация о пользователе:', user);

    try {
        // Используем модель для добавления нового пользователя
        const newUser = new UserModel({
            id: user.id,
            firstName: user.first_name,
            username: user.username,
        });

        await newUser.save();
        console.log('Новый пользователь добавлен:', newUser);
    } catch (e) {
        console.log('Ошибка при добавлении пользователя:', e);
    }

    ctx.reply(
        `Привет, ${user.first_name}! 👋\nНажми на кнопку, чтобы продолжить.`
    );
});

export { bot };
