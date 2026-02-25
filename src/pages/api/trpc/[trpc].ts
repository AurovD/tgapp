import { createNextApiHandler } from '@trpc/server/adapters/next';
import { router } from '@/utils/api';
import { bot } from '@/utils/bot';
import { connectDb } from '@/utils/db';

// Подключаемся к базе данных
void connectDb().catch((err) => console.error('MongoDB connection error:', err));



declare global {
    // eslint-disable-next-line no-var
    var __botStarted: boolean | undefined;
}

if (!global.__botStarted) {
    global.__botStarted = true;
    bot.launch()
        .then(() => console.log('Telegram bot started!'))
        .catch((err) => console.error('Error launching bot:', err));
}

export type AppRouter = typeof router;

export default createNextApiHandler({
    router,
});