import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();



const router = t.router({
    user: t.procedure
        .input(z.object({ id: z.number(), name: z.string(), username: z.string() }))
        .mutation(async ({ input }) => {
            console.log("Полученные данные:", input);
            return { success: true };
        }),
});

export { router };
