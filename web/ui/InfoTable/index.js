import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
// UI
import Section from "../../ui/Section";

const InfoTable = ({ id }) => (
    <Section
        id={id}
        noTopPadding
        noBottomPadding
        className={classNames(fonts.regular, fonts.center)}
    >
        <div className={classNames(fonts.medium, styles.infotable)}>
            <div className={classNames(styles.infotable_row)}>
                <div>Ceny vč. DPH:</div>
                <div>bude doplněno</div>
            </div>

            <div className={classNames(styles.infotable_row)}>
                <div>Typy:</div>
                <div>bytové jednotky</div>
            </div>

            <div className={classNames(styles.infotable_row)}>
                <div>Výměry bytů:</div>
                <div>45 m² – 116 m²</div>
            </div>

            <div className={classNames(styles.infotable_row)}>
                <div>Dispozice:</div>
                <div>1+kk – 4+kk</div>
            </div>

            <div className={classNames(styles.infotable_row)}>
                <div>Lokalita:</div>
                <div>ulice Lipová, Brno – Masarykova čtvrť</div>
            </div>

            <div className={classNames(styles.infotable_row)}>
                <div>K nastěhování:</div>
                <div>bude doplněno</div>
            </div>

            <div className={classNames(styles.infotable_row)}>
                <div>PENB:</div>
                <div>bude doplněno</div>
            </div>
        </div>
    </Section>
);

export default InfoTable;
