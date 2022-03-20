import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

const PageContainer = ({ id, children, className, noBottomPadding }) => (
    <div
        id={id}
        className={classNames(
            styles.page_container,
            className,
            noBottomPadding && styles.no_bottom_padding
        )}
    >
        {children}
    </div>
);

export default PageContainer;
