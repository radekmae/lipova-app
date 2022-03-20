import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
// import margin from "../../vars/margin/margin.module.scss";
// UI
// import Title from "../../ui/Title";
// import Section from "../../ui/Section";

const Footer = ({ id, database }) => {
    return (
        <div id={id} className={classNames(fonts.regular, styles.footer)}>
            <div className={styles.footer_logo} />
        </div>
    );
};

export default Footer;
