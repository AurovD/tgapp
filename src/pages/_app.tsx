import { trpc } from '@/utils/trpc';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from "next/head";
import Script from "next/script";
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: any) {

    return (
        <trpc.Provider
            client={trpc.createClient({
                links: [httpBatchLink({ url: '/api/trpc' })],
            })}
            queryClient={queryClient}
        >
            <QueryClientProvider client={queryClient}>
                <Script src="https://telegram.org/js/telegram-web-app.js?56" />
                <Head>
                    <title>TGApp</title>
                </Head>
                <Component {...pageProps} />
            </QueryClientProvider>
        </trpc.Provider>
    );
}
