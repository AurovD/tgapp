import { useEffect, useState } from "react";

// Типизация объекта User
interface User {
    id: string;
    username: string;
    first_name?: string;
    last_name?: string;
}

// Интерфейс для объекта WebApp
interface TelegramWebApp {
    ready: () => void;
    close: () => void;
    expand?: () => void;  // Добавляем метод expand, если он существует
    initDataUnsafe?: { user?: User };  // Типизируем данные о пользователе
}

// Тип для window, который включает Telegram
interface WindowWithTelegram extends Window {
    Telegram?: {
        WebApp: TelegramWebApp;
    };
}

export function useTelegram() {
    const [tg, setTg] = useState<TelegramWebApp | null>(null);

    useEffect(() => {
        const telegram = (window as WindowWithTelegram).Telegram?.WebApp;
        if (telegram) {
            setTg(telegram);
            telegram.ready(); // Вызываем ready(), только если WebApp доступен
        } else {
            console.warn("Telegram Web App is not available.");
        }
    }, []);

    return {
        tg,
        user: tg?.initDataUnsafe?.user || null,
        close: () => tg?.close(),
    };
}