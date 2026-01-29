// import { trpc } from '@/utils/trpc';
// import {useEffect, useState} from "react";
import {User} from "@/states/states";
// import Loading from "@/components/Loading";
// import Header from "@/components/Header";
// import Link from "next/link";
import Create from "@/pages/create";


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

export default function HomePage() {

    return (
        <Create/>
    )
}
// export default function HomePage() {
//     const [user, setUser] = useState<User | null>(null);
//     const sendUserData = trpc.user.useMutation({
//         onError: (error) => {
//             console.error("Ошибка при отправке данных:", error);
//             alert("Произошла ошибка. Попробуйте позже.");
//             window.Telegram?.WebApp?.close();
//         },
//     });
//
//     useEffect(() => {
//         if (window.Telegram?.WebApp) {
//             const userData = window.Telegram.WebApp.initDataUnsafe?.user;
//             if (userData) {
//                 setUser(userData);
//
//                 sendUserData.mutate({
//                     id: userData.id,
//                     first_name: userData.first_name,
//                     username: userData.username || "Без логина",
//                 });
//             } else {
//                 // alert("Не удалось получить данные пользователя.");
//                 window.Telegram?.WebApp?.close();
//             }
//         }
//     }, []);
//
//     return (
//         <>
//         {user ? (
//             <Header>
//                 <div>
//                     <h1 className="greeting">
//                         <span>Привет,</span>
//                         <span>{user.first_name}!</span>
//                     </h1>
//                     <p className={"location"}>Москва, Россия</p>
//                 </div>
//                 <div className={"creating"}>
//                     <Link href="/create">Создать событие</Link>
//                 </div>
//             </Header>
//                 ) : (
//                 <Loading></Loading>
//                 )}
//             </>
//         );
//         }