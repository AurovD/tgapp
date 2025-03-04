import { initTRPC } from '@trpc/server';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { z } from 'zod';
import {Telegraf} from "telegraf";
import { db } from "@/utils/db";



const t = initTRPC.create();


const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;


if (!BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN is not defined");
}

const bot = new Telegraf(BOT_TOKEN);


bot.command('start', async (ctx) => {
    // const url = "https://tgapp-dohv.onrender.com/";

    const user = ctx.from;

    console.log("Информация о пользователе:", user);

    try {
        const newUser = await db.collection('users').insertOne({ login: user.username });
        return { message: "Пользователь добавлен", userId: newUser.insertedId };
    } catch (e) {
        console.log("Ошибка при добавлении пользователя:", e);
        throw new Error("Ошибка при добавлении пользователя");
    }



    // const keyboard = Markup.inlineKeyboard([
    //     [Markup.button.webApp("Открыть приложение", url)]
    // ]);

    // ctx.reply(
    //     `Привет, ${user.first_name}! 👋\nНажми на кнопку, чтобы продолжить.`,
    //     keyboard
    // );
});

bot.launch();




// mongodb+srv://<root>:<ldmgzcP1C9UDzEBO>@cluster0.fhosm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const appRouter = t.router({

    hello: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
        try {
            console.log("hello");
            return { message: `Hello, ${input.name}!!!!` };
        } catch (e){
            console.log(e);
        }
    }),
});


export type AppRouter = typeof appRouter;



export default createNextApiHandler({
    router: appRouter,
});

// sudo lsof -PiTCP -sTCP:LISTEN
// kill -9 1362