import { initTRPC } from '@trpc/server';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { z } from 'zod';

const t = initTRPC.create();

const appRouter = t.router({
    hello: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
        return { message: `Hello, ${input.name}!` };
    }),
});

export type AppRouter = typeof appRouter;

export default createNextApiHandler({
    router: appRouter,
});
