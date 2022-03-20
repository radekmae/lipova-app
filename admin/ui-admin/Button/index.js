import React from "react";
import classNames from "classnames";

// sass modules
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";

const Button = ({ children, onClick, className, disabled }) => (
    <div
        onClick={disabled ? null : onClick}
        className={classNames(
            styles.button,
            disabled && styles.button_disabled,
            className
        )}
    >
        <div
            className={classNames(
                fonts.button_small,
                true && fonts.button_large,
                styles.button_title
            )}
        >
            {children}
        </div>
    </div>
);

export default Button;
