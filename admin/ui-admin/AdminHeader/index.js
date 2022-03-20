import Link from "next/link";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
// constants
import * as ROUTES from "constants/routes";
// ui-admin
import Icon from "admin/ui-admin/Icon";

import { useAuthContext } from "components/Session";

export default function AdminHeader() {
    const { logout } = useAuthContext();

    return (
        <header className={styles.adminheader}>
            <Link href={ROUTES.LANDING}>
                <div
                    className={classNames(
                        fonts.button_header,
                        styles.adminheader_button
                    )}
                >
                    <Icon
                        className={styles.adminheader_button_icon}
                        name="left-arrow"
                    />
                    zpět na web
                </div>
            </Link>

            <section className={styles.adminheader_icons}>
                <Link href={ROUTES.ACCOUNT}>
                    <div>
                        <Icon name="user" className={styles.adminheader_icon} />
                    </div>
                </Link>

                <div>
                    <Icon
                        onClick={logout}
                        name="logout"
                        className={styles.adminheader_icon}
                    />
                </div>
            </section>
        </header>
    );
}
