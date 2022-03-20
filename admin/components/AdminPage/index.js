import styles from "./style.module.scss";
// constants
import ADMIN from "constants/admin";

import AdminFeature from "admin/ui-admin/AdminFeature";

export default function AdminPage() {
    return (
        <div className={styles.admin_container}>
            {ADMIN.ORDER.map((key) => (
                <AdminFeature key={key} type={key} {...ADMIN.FEATURES[key]} />
            ))}
        </div>
    );
}
