import classNames from "classnames";
import Transition from "react-transition-group/Transition";
// styles
import styles from "./style.module.scss";
// utils
import { startAppScroll, stopAppScroll } from "utils/appScroll";

export default function Loader({ loading }) {
    return (
        <Transition
            in={loading}
            onEnter={stopAppScroll}
            onExit={startAppScroll}
            timeout={500}
        >
            <main
                className={classNames(
                    styles.loader,
                    !loading && styles.loader_hidden
                )}
            >
                <div className={styles.loader_content}></div>
            </main>
        </Transition>
    );
}
