import React, { Component } from "react";
import classNames from "classnames";
import { TweenLite } from "gsap";
// ui-admin
import Icon from "admin/ui-admin/Icon";
// styles
import styles from "./style.module.scss";

class EditCard extends Component {
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

        TweenLite.to(this.editRef.current, 0.2, {
            height,
            onComplete: () => {
                this.editRef.current.style.height = "auto";
            },
        });
        TweenLite.to(this.editRef.current, 0.4, {
            delay: 0.1,
            autoAlpha: 1,
        });
        this.setState({ isOpen: true });
    };

    closeDropdown = () => {
        TweenLite.to(this.editRef.current, 0.2, {
            autoAlpha: 0,
        });
        TweenLite.to(this.editRef.current, 0.4, {
            delay: 0.1,
            height: 0,
        });
        this.setState({ isOpen: false });
    };

    render() {
        const {
            title,
            subtitle,
            addNew,
            children,
            servicesVariant,
            arrowIcon,
        } = this.props;

        return (
            <div
                className={classNames(
                    styles.editcard,
                    addNew && styles.editcard_addNew,
                    servicesVariant && styles.editcard_servicesVariant
                )}
            >
                <div
                    onClick={this.toggleDropdown}
                    className={styles.editcard_header}
                >
                    <div>
                        <div className={styles.editcard_title}>
                            {title ? title : "- nezadáno -"}
                        </div>
                        {!addNew && subtitle && (
                            <div className={styles.editcard_subtitle}>
                                {subtitle}
                            </div>
                        )}
                    </div>

                    <div
                        className={classNames(
                            styles.editcard_button,
                            addNew && styles.editcard_button_addNew
                        )}
                    >
                        <Icon
                            name={
                                addNew
                                    ? "add-song"
                                    : arrowIcon
                                    ? "arrow-down-sign-to-navigate"
                                    : "edit"
                            }
                            className={styles.editcard_button_icon}
                        />
                    </div>
                </div>

                <div className={styles.editcard_content} ref={this.editRef}>
                    {children}
                </div>
            </div>
        );
    }
}

export default EditCard;
