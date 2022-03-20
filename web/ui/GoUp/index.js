import classNames from "classnames";
// styles
import styles from "./style.module.scss";
// web ui
import Icon from "web/ui/Icon";
// utils
import scrollTo from "utils/scrollTo";

function handleScrollToTop() {
    scrollTo("oprojektu");
}

export default function GoUp({ isVisible }) {
    return (
        <div
            className={classNames(
                styles.goup,
                isVisible && styles.goup_visible
            )}
            onClick={handleScrollToTop}
        >
            <Icon name="navigate-up-arrow" className={styles.arrow} />
        </div>
    );
}
