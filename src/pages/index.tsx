import { trpc } from '@/utils/trpc';
import {useEffect} from "react";
import {useTelegram} from "@/utils/useTelegram";

export default function HomePage() {
    const { data, isLoading } = trpc.hello.useQuery({ name: 'Dmitry' });

    const { tg, user, close } = useTelegram();

    useEffect(() => {
        if (tg) {
            tg.expand();
        }
    }, [tg]);

    if (isLoading) return <p>Loading...</p>;

    return <h1>{data?.message}</h1>;
}
