import Link from "next/link";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
// constants
import * as ROUTES from "constants/routes";
// ui-admin
import Icon from "admin/ui-admin/Icon";

export default function LoginHeader() {
    return (
        <header className={styles.loginheader}>
            <Link href={ROUTES.LANDING}>
                <div
                    className={classNames(
                        fonts.button_header,
                        styles.loginheader_button
                    )}
                >
                    <Icon
                        className={styles.loginheader_button_icon}
                        name="left-arrow"
                    />
                    zpět na web
                </div>
            </Link>
        </header>
    );
}
