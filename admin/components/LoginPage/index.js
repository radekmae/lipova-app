import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
// styles
import styles from "./style.module.scss";
// ui-admin
import Input from "admin/ui-admin/Input";
import Button from "admin/ui-admin/Button";
// constants
import * as ROUTES from "constants/routes";
// firebase
import { doSignIn } from "admin/components/Firebase";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className={styles.login}>
            <div
                className={classNames(styles.login_section, styles.login_left)}
            >
                <span className={styles.login_image}>
                    <Image
                        priority
                        layout="fill"
                        src="admin/m3logo.svg"
                        alt="logo"
                    />
                </span>
            </div>

            <span className={styles.login_line} />

            <form
                className={classNames(styles.login_section, styles.login_right)}
            >
                <Input
                    value={email}
                    onChange={(value) => setEmail(value)}
                    placeholder="Email"
                    autoComplete="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                    placeholder="Password"
                    autoComplete="current-password"
                />
                <Button
                    onClick={async () => {
                        await doSignIn(email, password);
                        router.push(ROUTES.ADMIN);
                    }}
                >
                    přihlásit
                </Button>
            </form>
        </section>
    );
}
