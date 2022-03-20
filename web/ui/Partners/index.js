import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
import margin from "../../vars/margin/margin.module.scss";
// COMPONENTS
import Title from "../../ui/Title";
import Section from "../../ui/Section";

const Partners = ({ id }) => {
    return (
        <Section id={id} className={classNames(fonts.medium, fonts.center)}>
            <Title text="Partneři projektu" />

            <div className={classNames(styles.partners, margin.medium_bottom)}>
                <div className={styles.partners_item}>
                    <div
                        className={classNames(
                            styles.partners_image,
                            styles.img1
                        )}
                    />
                    <div className={fonts.regular}>PPC group</div>
                    <div className={fonts.medium}>Investor</div>
                </div>

                <div className={styles.partners_item}>
                    <div
                        className={classNames(
                            styles.partners_image,
                            styles.img2
                        )}
                    />
                    <div className={fonts.regular}>Rezidence Lipová</div>
                    <div className={fonts.medium}>Developer</div>
                </div>
            </div>

            <div className={styles.partners}>
                <div className={styles.partners_item}>
                    <div
                        className={classNames(
                            styles.partners_image,
                            styles.img3
                        )}
                    />
                    <div className={fonts.regular}>VL&Partneři</div>
                    <div className={fonts.medium}>Partner projektu</div>
                </div>

                <div className={styles.partners_item}>
                    <div
                        className={classNames(
                            styles.partners_image,
                            styles.img4
                        )}
                    />
                    <div className={fonts.regular}>SAP&Cie.</div>
                    <div className={fonts.medium}>
                        Partner a zprostředkovatel obchodu
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Partners;
