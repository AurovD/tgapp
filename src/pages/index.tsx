import { trpc } from '@/utils/trpc';
import {useState} from "react";



interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
}


declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initDataUnsafe?: {
                    user?: TelegramUser;
                };
                sendData: (data: string) => void;
                expand: () => void;
            };
        };
    }
}

export default function HomePage() {
    const { data, isLoading } = trpc.hello.useQuery({ name: 'Dmitry' });
    const [user, setUser] = useState<TelegramUser | null>(null);

    const handleGetUser = () => {
        if (window.Telegram?.WebApp) {
            console.log(window.Telegram)
            const userData = window.Telegram.WebApp.initDataUnsafe?.user;
            if (userData) {
                setUser(userData);
            } else {
                alert("Пользователь не найден");
            }
        } else {
            alert("Telegram WebApp не доступен");
        }
    };


    if (isLoading) return <p>Loading...</p>;
    return (<>
        <h1>{data?.message}</h1>
        {user ? (
            <p>Привет, {user.first_name}!</p>
        ) : (
            <button onClick={handleGetUser}>Получить пользователя</button>
        )}
    </>);
}