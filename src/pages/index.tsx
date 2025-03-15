import { trpc } from '@/utils/trpc';
import {useEffect, useState} from "react";
import {User} from "@/states/states";
import Loading from "@/components/Loading";
import Header from "@/components/Header";


declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initDataUnsafe?: {
                    user?: User;
                };
                sendData: (data: string) => void;
                expand: () => void;
                close: () => void;
            };
        };
    }
}

// export default function HomePage() {
//
//     return (
//         <>
//             <Header user_name={"Привет, Дмитрий"}/>
//     </>
//     );
// }
export default function HomePage() {
    const [user, setUser] = useState<User | null>(null);
    const sendUserData = trpc.user.useMutation({
        onError: (error) => {
            console.error("Ошибка при отправке данных:", error);
            alert("Произошла ошибка. Попробуйте позже.");
            window.Telegram?.WebApp?.close();
        },
    });

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
            } else {
                // alert("Не удалось получить данные пользователя.");
                window.Telegram?.WebApp?.close();
            }
        }
    }, []);

    return (
        <>
        {user ? (
            <Header user_name={user.first_name}/>
        ) : (
            <Loading></Loading>
        )}
    </>
    );
}