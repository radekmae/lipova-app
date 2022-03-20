import React from "react";

import styles from "./style.module.scss";

const IntroImage = ({ id }) => (
    <div id={id} className={styles.intro_image}>
        {/* <div className={styles.intro_image_logo}></div> */}
    </div>
);

export default IntroImage;
