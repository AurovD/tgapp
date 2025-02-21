import { initTRPC } from '@trpc/server';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { z } from 'zod';
import {Markup, Telegraf} from "telegraf";

const t = initTRPC.create();



const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "7703008999:AAHJufwwUVYzJEypgaLiaG8ImEbPgfflvkQ";
const bot = new Telegraf(BOT_TOKEN);

bot.command('start', (ctx) => {
    const url = "https://tgapp-dohv.onrender.com/";

    const keyboard = Markup.inlineKeyboard([
        [Markup.button.webApp('Открыть приложение', url)]
    ]);

    ctx.reply('Нажми на кнопку, чтобы продолжить!', keyboard);
});

bot.launch();

const appRouter = t.router({

    hello: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
        try {
            console.log("hello")
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