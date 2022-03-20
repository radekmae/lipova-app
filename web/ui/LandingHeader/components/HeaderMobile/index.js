// styles
import styles from "./style.module.scss";
// components
import CrossButton from "../CrossButton";

export default function HeaderMobile({ isOpen, onClick }) {
    return (
        <div className={styles.header_mobile}>
            <div className={styles.header_mobile_logo} />
            <CrossButton isOpen={isOpen} onClick={onClick} />
        </div>
    );
}
