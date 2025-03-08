import { createNextApiHandler } from '@trpc/server/adapters/next';
import { router } from '@/utils/api';
// import { bot } from '@/utils/bot';

// bot.launch()
//     .then(() => console.log('Telegram bot started!'))
//     .catch((err) => console.error('Error launching bot:', err));

export type AppRouter = typeof router;

export default createNextApiHandler({
    router,
});

