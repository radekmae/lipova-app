import Transition from "react-transition-group/Transition";
import React from "react";
import classNames from "classnames";
import gsap from "gsap";
// styles
import styles from "./style.module.scss";
import fonts from "web/vars/fonts/fonts.module.scss";
// web ui
import GoUp from "web/ui/GoUp";
// components
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import AnimatedMenu from "./components/AnimatedMenu";

class LandingHeader extends React.Component {
    headerRef = React.createRef();
    contentRef = React.createRef();

    state = {
        isOpen: false,
        isOpenMenu: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.toggleHeader);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.toggleHeader);
    }

    toggleHeader = () => {
        const { isOpen } = this.state;
        const condition = window.scrollY > window.innerHeight;

        if ((condition && isOpen) || (!condition && !isOpen)) {
            return;
        }
        this.setState({ isOpen: condition, isOpenMenu: false });
    };

    openHeader = () => {
        gsap.to(this.headerRef.current, {
            duration: 0.2,
            autoAlpha: 1,
            height: 60,
            onComplete: () => {
                gsap.to(this.contentRef.current, {
                    duration: 0.2,
                    autoAlpha: 1,
                });
                gsap.set(this.headerRef.current, {
                    height: "auto",
                });
            },
        });
    };

    closeHeader = () => {
        gsap.to(this.contentRef.current, {
            duration: 0.2,
            autoAlpha: 0,
            onComplete: () => {
                gsap.to(this.headerRef.current, {
                    duration: 0.3,
                    autoAlpha: 0,
                    height: 0,
                });
            },
        });
    };

    toggleMenu = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    };

    render() {
        const { isOpen, isOpenMenu } = this.state;

        return (
            <Transition
                in={isOpen}
                onEnter={this.openHeader}
                onExit={this.closeHeader}
                timeout={500}
            >
                <div
                    className={classNames(
                        fonts.regular,
                        fonts.uppercase,
                        fonts.white,
                        styles.header_container
                    )}
                >
                    <div ref={this.headerRef} className={styles.header}>
                        <div
                            ref={this.contentRef}
                            className={styles.header_content}
                        >
                            <HeaderDesktop />
                            <HeaderMobile
                                isOpen={isOpenMenu}
                                onClick={this.toggleMenu}
                            />
                        </div>
                    </div>

                    <AnimatedMenu
                        isOpen={isOpenMenu}
                        onClick={this.toggleMenu}
                    />
                    <GoUp isVisible={isOpen} />
                </div>
            </Transition>
        );
    }
}

export default LandingHeader;
