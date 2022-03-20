import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
// COMPONENTS
import Section from "../../ui/Section";
import Title from "../../ui/Title";

const Financing = ({ id, database }) => (
    <div className={styles.financing}>
        <Section id={id} className={classNames(fonts.regular, fonts.center)}>
            <Title text="Financování" />

            <div>
                {database.strings.finance &&
                    database.strings.finance.split("\n").map((i, key) => {
                        return (
                            <p key={key}>
                                {i}
                                <br />
                            </p>
                        );
                    })}
            </div>
        </Section>
    </div>
);

export default Financing;
