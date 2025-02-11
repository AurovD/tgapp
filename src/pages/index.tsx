import { trpc } from '../../utils/trpc';

export default function HomePage() {
    const { data, isLoading } = trpc.hello.useQuery({ name: 'Dmitry' });

    if (isLoading) return <p>Loading...</p>;

    return <h1>{data?.message}</h1>;
}
