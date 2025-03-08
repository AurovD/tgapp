import { initTRPC } from '@trpc/server';
import { z } from 'zod';
// import { publicProcedure } from "./trpc";

const t = initTRPC.create();



// const getUserSchema = z.object({
//     id: z.number(),
// });

// Выводим тип из схемы
// type GetUserInput = z.infer<typeof getUserSchema>;

const router = t.router({
    hello: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
        try {
            console.log('hello');
            return { message: `Hello, ${input.name}!!!!` };
        } catch (e) {
            console.log(e);
        }
    }),
    // getUser: publicProcedure
    //     .input(getUserSchema) // Теперь используем схему
    //     .query(async ({ input }: { input: GetUserInput }) => {
    //         console.log(input);
    //         // const user = await fetchUserFromDB(input.id); // Запрос в БД
    //         // return { user };
    //     }),
});

export { router };
