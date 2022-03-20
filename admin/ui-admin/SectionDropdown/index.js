import React, { Component } from "react";
import classNames from "classnames";
import gsap from "gsap";
// styles
import styles from "./style.module.scss";
// utils
import scrollTo from "utils/scrollTo";
// ui-admin
import Icon from "admin/ui-admin/Icon";

class SectionDropdown extends Component {
    state = {};

    editRef = React.createRef();

    toggleDropdown = () => {
        if (this.state.isOpen) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    };

    openDropdown = () => {
        this.editRef.current.style.height = "auto";
        const height = this.editRef.current.getBoundingClientRect().height;
        this.editRef.current.style.height = "0";

        gsap.to(this.editRef.current, {
            duration: 0.2,
            autoAlpha: 1,
            height,
            onComplete: () => {
                scrollTo(`${this.props.id}`, 65);
                this.editRef.current.style.height = "auto";
            },
        });

        this.setState({ isOpen: true });
    };

    closeDropdown = () => {
        gsap.to(this.editRef.current, {
            duration: 0.2,
            autoAlpha: 0,
            height: 0,
        });
        this.setState({ isOpen: false });
    };

    render() {
        const { id, title, subtitle, children, noBorder } = this.props;

        return (
            <div
                id={id}
                className={classNames(
                    styles.editDropdown,
                    noBorder && styles.noBorder
                )}
            >
                <div className={styles.header} onClick={this.toggleDropdown}>
                    <div className={styles.editCardTitle}>{title}</div>
                    <div className={styles.editCardsubtitlee}>{subtitle}</div>
                    <div className={styles.icons}>
                        <Icon
                            name="arrow-down-sign-to-navigate"
                            className={styles.editCardIcon}
                        />
                    </div>
                </div>

                <div className={styles.dropdown} ref={this.editRef}>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        );
    }
}

export default SectionDropdown;
