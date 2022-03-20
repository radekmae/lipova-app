import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
// COMPONENTS
import Title from "../../ui/Title";
import Section from "../../ui/Section";

const Timeline = ({ id, database }) => (
    <div className={styles.timeline}>
        <Section
            id={id}
            noBottomPadding
            className={classNames(fonts.regular, fonts.center)}
        >
            <Title text="časový harmonogram" />

            <div className={styles.timeline_table}>
                <div className={styles.timeline_column}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <div className={styles.timeline_column}>
                    <div>
                        Zahájení stavby
                        <div>bude doplněno</div>
                    </div>
                    <div>
                        Zahájení prodeje
                        <div>bude doplněno</div>
                    </div>

                    <div>
                        Předpokládaný termín kolaudace
                        <div>bude doplněno</div>
                    </div>
                    <div>
                        Předpokládaný termín předání BJ
                        <div>bude doplněno</div>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);

export default Timeline;
