import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/utils/api';
import { bot } from '@/utils/bot';

export default createNextApiHandler({
    router: appRouter,
});

