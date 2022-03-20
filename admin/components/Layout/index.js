import Head from "next/head";
// components
import Header from "admin/components/Header";
// ui-admin
import Loader from "admin/ui-admin/Loader";
// constants
import titles from "constants/pageTitles";

export default function Layout({ children, page, loading }) {
    return (
        <>
            <Head>
                <title>{titles[page]}</title>
                <link rel="icon" href="/admin/favicon.svg" />
            </Head>

            <Loader loading={loading} />

            <main>
                <Header page={page} />
                {children}
            </main>
        </>
    );
}
