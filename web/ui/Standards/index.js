import React from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
import margin from "../../vars/margin/margin.module.scss";
// COMPONENTS
import Title from "../../ui/Title";
import Section from "../../ui/Section";
import SvgIcon from "../../ui/SvgIcon";
import SectionDropdown from "../../ui/SectionDropdown";

const Standards = ({ id, database }) => {
    const flats =
        database.standards && database.standards.flats
            ? database.standards.flats
            : {};
    const house =
        database.standards && database.standards.house
            ? database.standards.house
            : {};
    const system =
        database.standards && database.standards.system
            ? database.standards.system
            : {};

    return (
        <Section id={id} className={classNames(fonts.regular, fonts.center)}>
            <Title text="Standardy" />

            <div className={classNames(fonts.h3, margin.medium_bottom)}>
                Standardy vybavení
            </div>
            <div className={classNames(fonts.medium, margin.medium_bottom)}>
                <div className={styles.standards_items}>
                    <a
                        className={styles.standards_item}
                        href="/pdf/standardy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon name="pdf" className={styles.standards_svg} />
                        Standardy
                    </a>

                    <a
                        className={styles.standards_item}
                        href="/pdf/penb.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon name="pdf" className={styles.standards_svg} />
                        PENB
                    </a>

                    <a
                        className={styles.standards_item}
                        href="/pdf/koupelny.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon name="pdf" className={styles.standards_svg} />
                        Koupelny
                    </a>
                    <a
                        className={styles.standards_item}
                        href="/pdf/podlahy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon name="pdf" className={styles.standards_svg} />
                        Podlahy
                    </a>
                    <a
                        className={styles.standards_item}
                        href="/pdf/dvere.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon name="pdf" className={styles.standards_svg} />
                        Dveře
                    </a>
                </div>
            </div>

            <SectionDropdown initialHeight={250} time={0.6}>
                <div className={classNames(fonts.h3, margin.medium_bottom)}>
                    Konstrukční systém
                </div>
                {Object.values(system)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((item, idx) => {
                        return (
                            <div className={fonts.center} key={idx}>
                                <div
                                    className={classNames(
                                        styles.standards_title,
                                        fonts.medium
                                    )}
                                >
                                    {item.name}
                                </div>
                                {item.desc}
                            </div>
                        );
                    })}

                <div
                    className={classNames(
                        fonts.h3,
                        margin.medium_top,
                        margin.medium_bottom
                    )}
                >
                    Standardy bytových jednotek
                </div>
                {Object.values(flats)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((item, idx) => {
                        return (
                            <div className={fonts.center} key={idx}>
                                <div
                                    className={classNames(
                                        styles.standards_title,
                                        fonts.medium
                                    )}
                                >
                                    {item.name}
                                </div>
                                {item.desc}
                            </div>
                        );
                    })}

                <div
                    className={classNames(
                        fonts.h3,
                        margin.medium_top,
                        margin.medium_bottom
                    )}
                >
                    Standardy společných prostor
                </div>
                {Object.values(house)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((item, idx) => {
                        return (
                            <div className={fonts.center} key={idx}>
                                <div
                                    className={classNames(
                                        styles.standards_title,
                                        fonts.medium
                                    )}
                                >
                                    {item.name}
                                </div>
                                {item.desc}
                            </div>
                        );
                    })}
            </SectionDropdown>
        </Section>
    );
};

export default Standards;
