import { initTRPC } from '@trpc/server';
import { z } from 'zod';
// import UserModel from "@/models/userSchema";

const t = initTRPC.create();



const router = t.router({
    user: t.procedure
        .input(z.object({ id: z.number(), first_name: z.string(), username: z.string() }))
        .mutation(async ({ input }) => {
            console.log("Полученные данные api:", input);
            try {
                // const existingUser = await UserModel.findOne({ id: input.id });
                //
                // if (!existingUser) {
                //     const newUser = new UserModel({
                //         id: input.id,
                //         first_name: input.first_name,
                //         username: input.username,
                //     });
                //
                //     await newUser.save();
                //     console.log('Новый пользователь добавлен:', newUser);
                // }
            } catch (e) {
                console.log('Ошибка при добавлении пользователя:', e);
                throw new Error("Ошибка сервера, попробуйте позже.");
            }
        }),
});

export { router };
