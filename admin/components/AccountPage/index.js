import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
// styles
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
// ui-admin
import Input from "admin/ui-admin/Input";
import Button from "admin/ui-admin/Button";
// constants
import * as ROUTES from "constants/routes";
// firebase
import { doUpdatePassword } from "admin/components/Firebase";

export default function AccountPage() {
    const router = useRouter();

    const [pswd1, setPswd1] = useState("");
    const [pswd2, setPswd2] = useState("");
    const [error, setError] = useState({});

    const isInvalid = pswd1 !== pswd2 || pswd1 === "";

    return (
        <section className={styles.account}>
            <form className={classNames(styles.account_form)}>
                <div className={fonts.h2}>Změna hesla</div>

                <Input
                    name="pswd1"
                    onChange={(value) => setPswd1(value)}
                    value={pswd1}
                    type="password"
                    placeholder="Nové heslo"
                    autoComplete="new-password"
                />

                <Input
                    name="pswd2"
                    onChange={(value) => setPswd2(value)}
                    value={pswd2}
                    type="password"
                    placeholder="Nové heslo znovu"
                    autoComplete="new-password"
                />

                <Button
                    disabled={isInvalid}
                    onClick={async () => {
                        await doUpdatePassword(pswd1)
                            .then(() => {
                                setPswd1("");
                                setPswd2("");
                                router.push(ROUTES.ADMIN);
                            })
                            .catch((error) => {
                                setError(error);
                            });
                    }}
                >
                    Změnit heslo
                </Button>

                {error && <p>{error.message}</p>}
            </form>
        </section>
    );
}
