// admin
import AdminPage from "admin/components/AdminPage";
import Layout from "admin/components/Layout";
// landing
import { useDatabaseContext } from "admin/components/Database";

export default function Admin() {
    const { loading } = useDatabaseContext();

    return (
        <Layout page="admin" loading={loading}>
            <AdminPage />
        </Layout>
    );
}
