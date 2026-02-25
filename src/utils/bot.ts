import { Telegraf } from 'telegraf';
// import UserModel from '../models/userSchema';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
    throw new Error('TELEGRAM_BOT_TOKEN is not defined');
}

const bot = new Telegraf(BOT_TOKEN);

bot.command('start', async (ctx) => {
    const user = ctx.from;

    console.log('Информация о пользователе: bot', user);



    try {
        // const existingUser = await UserModel.findOne({ id: user.id });
        //
        // if (!existingUser) {
        //     const newUser = new UserModel({
        //         id: user.id,
        //         first_name: user.first_name,
        //         username: user.username,
        //     });
        //
        //     await newUser.save();
        //     console.log('Новый пользователь добавлен:', newUser);
        // }
    } catch (e) {
        console.log('Ошибка при добавлении пользователя:', e);
        ctx.reply(
            `Сервис не отвечает 😔. Попробуй перезапустить бота или зайти чуть позже.`
        );
    }

    ctx.reply(
        `Привет, ${user.first_name}! 👋\nОткрой приложение, чтобы продолжить.`
    );
});

export { bot };
