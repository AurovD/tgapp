import { trpc } from '@/utils/trpc';
import {useEffect, useState} from "react";
import {User} from "@/states/states";



// interface TelegramUser {
//     id: number;
//     firstName: string;
//     username?: string;
// }


declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initDataUnsafe?: {
                    user?: User;
                };
                sendData: (data: string) => void;
                expand: () => void;
            };
        };
    }
}

export default function HomePage() {
    const [user, setUser] = useState<User | null>(null);
    const sendUserData = trpc.user.useMutation(); // Вызов мутации для отправки данных

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const userData = window.Telegram.WebApp.initDataUnsafe?.user;
            if (userData) {
                setUser(userData);

                sendUserData.mutate({
                    id: userData.id,
                    first_name: userData.first_name,
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