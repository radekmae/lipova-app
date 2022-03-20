import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

const Section = ({
    id,
    children,
    className,
    noTopPadding,
    noBottomPadding,
    fullWidth,
}) => (
    <div
        id={id}
        className={classNames(
            styles.section,
            className,
            fullWidth && styles.section_fullwidth,
            noTopPadding && styles.no_top_padding,
            noBottomPadding && styles.no_bottom_padding
        )}
    >
        {children}
    </div>
);

export default Section;
