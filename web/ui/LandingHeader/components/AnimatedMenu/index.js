import Transition from "react-transition-group/Transition";
import { useRef } from "react";
import gsap from "gsap";
// styles
import styles from "./style.module.scss";
// utils
import scrollTo from "utils/scrollTo";
// constants
import links from "constants/links";

export default function AnimatedMenu({ isOpen, onClick }) {
    const menuRef = useRef(null);
    const contentRef = useRef(null);

    function openMenu() {
        const height = contentRef.current.getBoundingClientRect().height;
        gsap.to(menuRef.current, {
            duration: 0.3,
            autoAlpha: 1,
            height,
            onComplete: () => {
                menuRef.current.style.height = "auto";
            },
        });
    }

    function closeMenu() {
        gsap.to(menuRef.current, {
            duration: 0.3,
            autoAlpha: 0,
            height: 0,
        });
    }

    function handleScrollTo(id, offsetScroll) {
        scrollTo(id, offsetScroll);
        onClick();
    }

    return (
        <Transition
            in={isOpen}
            onEnter={openMenu}
            onExit={closeMenu}
            timeout={300}
        >
            <div className={styles.animated_menu} ref={menuRef}>
                <div className={styles.animated_menu_content} ref={contentRef}>
                    {links.map(({ id, offsetScroll, title }) => (
                        <div
                            key={id}
                            className={styles.animated_menu_link}
                            onClick={() => handleScrollTo(id, offsetScroll)}
                        >
                            {title}
                        </div>
                    ))}
                </div>
            </div>
        </Transition>
    );
}
