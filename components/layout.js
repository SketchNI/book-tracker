import Head from 'next/head';

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Book Tracker</title>
            </Head>
            <main className="text-zinc-100">{children}</main>
        </>
    )
}