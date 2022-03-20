// components
import Layout from "web/components/Layout";
import LandingPage from "web/components/LandingPage";

// import { useDatabaseContext } from "web/components/Database";
import { get } from "firebase/database";
import { dbRef } from "components/Firebase/initFirebase";

export default function Landing({ database, settings }) {
    return (
        <Layout page="landing" settings={settings}>
            <LandingPage database={database} />
        </Layout>
    );
}

export async function getServerSideProps() {
    let db = {};
    let settings = {};
    await get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                db = snapshot.val();
                settings = db.admin.settings;
            }
        })
        .catch((error) => {
            console.log("log-2", error);
        });
    return { props: { database: db.web, settings } };
}
