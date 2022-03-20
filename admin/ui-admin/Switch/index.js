import React, { memo } from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

const Switch = ({ className, onChange, value }) => (
    <div
        className={classNames(
            styles.switch,
            value && styles.switch_on,
            className
        )}
        onClick={onChange}
    >
        <div
            className={classNames(
                styles.switch_slider,
                value && styles.switch_slider_on
            )}
        />
    </div>
);

export default memo(Switch);
