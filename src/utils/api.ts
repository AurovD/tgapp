import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const router = t.router({
    hello: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
        try {
            console.log('hello');
            return { message: `Hello, ${input.name}!!!!` };
        } catch (e) {
            console.log(e);
        }
    }),
});
//
// export type AppRouter = typeof appRouter;
//
export { router };
