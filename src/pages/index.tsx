import { trpc } from '@/utils/trpc';
import {useEffect} from "react";
import {useTelegram} from "@/utils/useTelegram";

export default function HomePage() {
    const { data, isLoading } = trpc.hello.useQuery({ name: 'Dmitry' });

    const { tg, user } = useTelegram();

    useEffect(() => {
        if (tg?.expand) {
            tg.expand();
        }
    }, [tg, user]);

    if (isLoading) return <p>Loading...</p>;
    return (<>
        <h1>{data?.message}</h1>
        {user ? JSON.stringify(user) : <div>?</div>}
    </>);
}

//docker buildx build --platform linux/amd64 -t aurovdm/tgapp:1.0.0 .
// docker buildx build --platform linux/amd64,linux/arm64 -t aurovdm/tgapp:1.0 .
// J1NztEaFA1tmCF1k