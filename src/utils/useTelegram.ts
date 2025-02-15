import { useEffect, useState } from "react";

export function useTelegram() {
    const [tg, setTg] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && "Telegram" in window) {
            setTg((window as any).Telegram.WebApp);
            (window as any).Telegram.WebApp.ready();
        }
    }, []);

    return {
        tg,
        user: tg?.initDataUnsafe?.user || null,
        close: () => tg?.close(),
    };
}
