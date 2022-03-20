import { useState, useEffect } from "react";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
// styles
import styles from "./style.module.scss";
import fonts from "web/vars/fonts/fonts.module.scss";
import margin from "web/vars/margin/margin.module.scss";
// utils
import { startAppScroll, stopAppScroll } from "utils/appScroll";

export default function Lock({ settings }) {
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        if (settings.weblock.data.pass === password) {
            setIsLocked(false);
        } else {
            setWrongPassword(true);
        }
    }

    useEffect(() => {
        settings.weblock.data.locked && setIsLocked(true);
    }, []);

    return (
        <Transition
            in={isLocked}
            onEnter={stopAppScroll}
            onExit={startAppScroll}
            timeout={500}
        >
            <div
                className={classNames(
                    styles.lock,
                    !isLocked && styles.lock_hidden
                )}
            >
                <div className={styles.lock_content}>
                    <div
                        className={classNames(
                            styles.lock_logo,
                            margin.medium_bottom
                        )}
                    />

                    <div
                        className={classNames(
                            fonts.h2,
                            fonts.white,
                            margin.medium_bottom
                        )}
                    >
                        Webová stránka je uzamčena!
                    </div>

                    <form onSubmit={onSubmit}>
                        <div className={fonts.button_small}>
                            Přístupové heslo
                        </div>

                        <div className={styles.lock_form_content}>
                            <input
                                className={classNames(
                                    styles.lock_input,
                                    wrongPassword && styles.lock_input_wrongpass
                                )}
                                name="password"
                                value={password}
                                onChange={({ target }) =>
                                    setPassword(target.value)
                                }
                            />
                            <button
                                className={styles.lock_submit}
                                type="submit"
                            >
                                <div className={fonts.button_large}>
                                    Odemknout
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    );
}
