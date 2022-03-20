import Head from "next/head";
// web ui
import LandingHeader from "web/ui/LandingHeader";
// web components
import Lock from "web/components/Lock";
import Loader from "web/components/Loader";
// constants
import titles from "constants/pageTitles";

export default function dLayout({ children, page, loading, settings }) {
    return (
        <>
            <Head>
                <title>{titles[page]}</title>
                <link rel="icon" href="/web/images/favicon.svg" />
            </Head>

            <Loader loading={loading} />
            {!loading && (
                <main>
                    <Lock settings={settings} />
                    <LandingHeader />
                    {children}
                </main>
            )}
        </>
    );
}
