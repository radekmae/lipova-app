import Link from "next/link";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
// ui-admin
import Icon from "admin/ui-admin/Icon";
// constants
import * as ROUTES from "constants/routes";
// components
import { useAuthContext } from "components/Session";

export default function Accountheader() {
    const { logout } = useAuthContext();

    return (
        <header className={styles.accountheader}>
            <Link href={ROUTES.ADMIN}>
                <div
                    className={classNames(
                        fonts.button_header,
                        styles.accountheader_button
                    )}
                >
                    <Icon
                        className={styles.accountheader_button_icon}
                        name="left-arrow"
                    />
                    zpět do administrace
                </div>
            </Link>

            <section className={styles.accountheader_icons}>
                <div>
                    <Icon
                        onClick={logout}
                        name="logout"
                        className={styles.accountheader_icon}
                    />
                </div>
            </section>
        </header>
    );
}
