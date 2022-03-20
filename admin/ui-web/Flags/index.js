import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
// UI
import SvgIcon from "admin/ui-admin/SvgIcon";

const Flags = ({ active, onChange }) => (
    <React.Fragment>
        <SvgIcon
            onClick={() => onChange("bicycle")}
            name="bicycle"
            className={classNames(
                styles.flags_icon,
                active === "bicycle" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("bus")}
            name="bus"
            className={classNames(
                styles.flags_icon,
                active === "bus" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("castle")}
            name="castle"
            className={classNames(
                styles.flags_icon,
                active === "castle" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("education")}
            name="education"
            className={classNames(
                styles.flags_icon,
                active === "education" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("expo")}
            name="expo"
            className={classNames(
                styles.flags_icon,
                active === "expo" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("healthcare")}
            name="healthcare"
            className={classNames(
                styles.flags_icon,
                active === "healthcare" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("point")}
            name="point"
            className={classNames(
                styles.flags_icon,
                active === "point" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("shop")}
            name="shop"
            className={classNames(
                styles.flags_icon,
                active === "shop" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("swimming")}
            name="swimming"
            className={classNames(
                styles.flags_icon,
                active === "swimming" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("train")}
            name="train"
            className={classNames(
                styles.flags_icon,
                active === "train" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("tram")}
            name="tram"
            className={classNames(
                styles.flags_icon,
                active === "tram" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("tree")}
            name="tree"
            className={classNames(
                styles.flags_icon,
                active === "tree" && styles.flags_icon_active
            )}
        />
        <SvgIcon
            onClick={() => onChange("tree2")}
            name="tree2"
            className={classNames(
                styles.flags_icon,
                active === "tree2" && styles.flags_icon_active
            )}
        />
    </React.Fragment>
);

export default Flags;
