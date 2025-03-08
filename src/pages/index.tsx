import { trpc } from '@/utils/trpc';
import {useEffect, useState} from "react";



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
    const [user, setUser] = useState<TelegramUser | null>(null);
    const sendUserData = trpc.user.useMutation(); // Вызов мутации для отправки данных

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const userData = window.Telegram.WebApp.initDataUnsafe?.user;
            if (userData) {
                setUser(userData);

                sendUserData.mutate({
                    id: userData.id,
                    name: userData.first_name,
                    username: userData.username || "Без логина",
                });
            }
        }
    }, []);

    return (
        <>
        {user ? (
            <p>Привет, {user.first_name}!</p>
        ) : (
            <p>Загрузка данных пользователя...</p>
        )}
    </>
    );
}