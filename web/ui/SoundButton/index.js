import React from "react";
// import { TweenLite } from "gsap";
import classNames from "classnames";

import styles from "./style.module.scss";

import SvgIcon from "../SvgIcon";

const SoundButton = ({ hidden, onClick, isMusic }) => (
    <div
        className={classNames(styles.soundbutton, hidden && styles.hidden)}
        onClick={onClick}
    >
        <SvgIcon
            name={isMusic ? "musicon" : "musicoff"}
            className={styles.soundbutton_icon}
        />
    </div>
);

export default SoundButton;
