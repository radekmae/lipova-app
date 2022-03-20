import React, { Component } from "react";
import classNames from "classnames";
import { TweenLite } from "gsap";
// SCSS
import styles from "./style.module.scss";
// COMPONENTS
import Button from "../Button";

class SectionDropdown extends Component {
    static defaultProps = {
        time: 1,
    };
    state = {};

    dropdownRef = React.createRef();
    overlayRef = React.createRef();
    contentRef = React.createRef();

    toggleDropdown = () => {
        if (this.state.isOpen) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    };

    openDropdown = () => {
        const height = this.contentRef.current.getBoundingClientRect().height;
        TweenLite.to(this.dropdownRef.current, this.props.time, {
            height,
            onComplete: () => {
                this.dropdownRef.current.style.height = "auto";
                TweenLite.to(this.overlayRef.current, 0.5, {
                    autoAlpha: 0,
                });
            },
        });

        this.setState({ isOpen: true });
    };

    closeDropdown = () => {
        TweenLite.to(this.dropdownRef.current, 2, {
            height: this.props.initialHeight,
        });
        this.setState({ isOpen: false });
    };

    render() {
        const { children, initialHeight: height, className, grey } = this.props;
        return (
            <div
                className={classNames(styles.dropdown, className)}
                style={{ height }}
                ref={this.dropdownRef}
            >
                <div ref={this.contentRef} className={styles.content}>
                    <div>{children}</div>
                </div>
                <div
                    ref={this.overlayRef}
                    onClick={this.toggleDropdown}
                    className={classNames(
                        styles.overlay,
                        grey && styles.overlay_grey
                    )}
                >
                    <Button
                        title="- Načíst další -"
                        className={styles.button}
                    />
                </div>
            </div>
        );
    }
}

export default SectionDropdown;
