import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/pages/api/trpc/[trpc]';
import {initTRPC} from "@trpc/server";
export const t = initTRPC.create();
export const publicProcedure = t.procedure;
export const trpc = createTRPCReact<AppRouter>();
