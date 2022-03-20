import Transition from "react-transition-group/Transition";
import { useRef } from "react";
import gsap from "gsap";
// styles
import styles from "./style.module.scss";

export default function CrossButton({ isOpen, onClick }) {
    const topLineRef = useRef(null);
    const middleLineRef = useRef(null);
    const bottomLineRef = useRef(null);

    function goCross() {
        gsap.to(middleLineRef.current, { duration: 0.2, autoAlpha: 0 });
        gsap.to(topLineRef.current, { duration: 0.3, y: 9, rotation: 23 });
        gsap.to(bottomLineRef.current, {
            duration: 0.3,
            y: -9,
            rotation: -23,
        });
    }

    function goMenu() {
        gsap.to(middleLineRef.current, {
            duration: 0.2,
            delay: 0.1,
            autoAlpha: 1,
        });
        gsap.to(topLineRef.current, { duration: 0.3, y: 0, rotation: 0 });
        gsap.to(bottomLineRef.current, {
            duration: 0.3,
            y: 0,
            rotation: 0,
        });
    }

    return (
        <Transition in={isOpen} onEnter={goCross} onExit={goMenu} timeout={300}>
            <div className={styles.cross_button} onClick={onClick}>
                <div className={styles.cross_button_line} ref={topLineRef} />
                <div className={styles.cross_button_line} ref={middleLineRef} />
                <div className={styles.cross_button_line} ref={bottomLineRef} />
            </div>
        </Transition>
    );
}
