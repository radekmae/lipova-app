import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
import margin from "../../vars/margin/margin.module.scss";

const Title = ({ id, text, white, right, left, noMarginBottom, className }) => (
    <div
        id={id}
        className={classNames(
            fonts.h2,
            margin.medium_bottom,
            styles.title,
            white && styles.title_white,
            right && styles.title_right,
            left && styles.title_left,
            noMarginBottom && styles.title_no_margin_bottom,
            className
        )}
    >
        {text}
    </div>
);

export default Title;
