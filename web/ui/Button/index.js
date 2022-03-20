import React from "react";
import classNames from "classnames";

// sass modules
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";

const Button = ({ onClick, title, large, className }) => (
    <div
        onClick={onClick}
        className={classNames(
            styles.button,
            large && styles.button_large,
            className
        )}
    >
        <div
            className={classNames(
                fonts.button_small,
                large && fonts.button_large,
                styles.button_title
            )}
        >
            {title}
        </div>
    </div>
);

export default Button;
