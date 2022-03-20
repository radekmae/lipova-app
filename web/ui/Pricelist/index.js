import React, { Component } from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "web/vars/fonts/fonts.module.scss";
import margin from "web/vars/margin/margin.module.scss";
// web ui
import Title from "web/ui/Title";
import Section from "web/ui/Section";
import SvgIcon from "web/ui/SvgIcon";
import SectionDropdown from "web/ui/SectionDropdown";
// utils
import scrollTo from "utils/scrollTo";

class Pricelist extends Component {
    state = {
        activeHouse: "",
        activeHouseNum: "",
    };

    scrollToContact = () => {
        scrollTo("kontakt");
    };

    onChangeHouse = (activeHouse) =>
        this.setState({
            activeHouse:
                this.state.activeHouse === activeHouse ? "" : activeHouse,
            activeHouseNum:
                this.state.activeHouse === activeHouse
                    ? ""
                    : activeHouse === "a"
                    ? 1
                    : activeHouse === "b"
                    ? 2
                    : 3,
        });

    render() {
        const { database, onClick, id } = this.props;
        const { activeHouseNum } = this.state; // activeHouse,

        return (
            <Section fullWidth id={id} className={fonts.center}>
                <Title text="Přehled cen" />
                <div className={classNames(fonts.h3, margin.medium_bottom)}>
                    BYTOVÉ JEDNOTKY
                </div>

                <SectionDropdown
                    className={margin.large_bottom}
                    initialHeight={300}
                    time={0.6}
                >
                    <div className={styles.pricelist_table_container}>
                        <div
                            className={classNames(
                                fonts.center,
                                fonts.regular,
                                styles.pricelist_table
                            )}
                        >
                            <div className={styles.pricelist_table_line}>
                                <div
                                    className={classNames(
                                        fonts.medium,
                                        styles.pricelist_table_row,
                                        styles.pricelist_table_row_header
                                    )}
                                >
                                    <div>Podlaží</div>
                                    <div>Označení</div>
                                    <div>Dispozice</div>
                                    <div>Výměra</div>
                                    <div>Balkon</div>
                                    <div>Terasa</div>
                                    <div>Sklep</div>
                                    <div>Parkovací stání</div>
                                    <div>Cena</div>
                                    <div>Karty bytů</div>
                                    <div> </div>
                                </div>
                            </div>

                            {database.flats
                                .filter((flat) => flat.isAvailable)
                                .filter((flat) =>
                                    activeHouseNum !== ""
                                        ? flat.house === activeHouseNum
                                        : true
                                )
                                .map((flat, idx) => (
                                    <div
                                        key={idx}
                                        className={classNames(
                                            styles.pricelist_table_line
                                            // fonts.table_row
                                        )}
                                    >
                                        <div
                                            className={
                                                styles.pricelist_table_row
                                            }
                                        >
                                            <div>{flat.podlazi}</div>
                                            <div>{flat.oznaceni}</div>
                                            <div>{flat.dispozice}</div>
                                            <div>{flat.vymera}</div>
                                            <div>{flat.balkon}</div>
                                            <div>{flat.terasa}</div>
                                            <div>
                                                {flat.sklep && (
                                                    <SvgIcon
                                                        name="checked"
                                                        className={
                                                            styles.pricelist_table_svg_checkmark
                                                        }
                                                    />
                                                )}
                                            </div>
                                            <div>{flat.parkovani}</div>
                                            <div>
                                                {flat.isRk ? (
                                                    <div
                                                        onClick={
                                                            this.scrollToContact
                                                        }
                                                        className={styles.label}
                                                    >
                                                        Na dotaz v RK
                                                    </div>
                                                ) : (
                                                    flat.cena
                                                )}
                                            </div>
                                            <div>
                                                <a
                                                    className={
                                                        styles.pricelist_row_pdflink
                                                    }
                                                    href={
                                                        "web/pdf/" +
                                                        flat.pdf +
                                                        ".pdf"
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <SvgIcon
                                                        name="pdf"
                                                        className={
                                                            styles.pricelist_table_svg
                                                        }
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    onClick(
                                                        flat.id,
                                                        flat.house === 1
                                                            ? "a"
                                                            : flat.house === 2
                                                            ? "b"
                                                            : "c",
                                                        flat.floor
                                                    )
                                                }
                                            >
                                                <SvgIcon
                                                    name="lupa"
                                                    className={
                                                        styles.pricelist_table_svg
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </SectionDropdown>

                <div className={styles.pricelist_cols}>
                    <div>
                        <div
                            className={classNames(
                                fonts.h3,
                                margin.medium_bottom
                            )}
                        >
                            PARKOVACÍ STÁNÍ
                        </div>
                        <div
                            className={classNames(
                                fonts.medium,
                                margin.medium_bottom
                            )}
                        >
                            <a
                                className={styles.pricelist_icon}
                                href="/pdf/1pp.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SvgIcon
                                    name="pdf"
                                    className={styles.pricelist_svg}
                                />
                                1. PP
                            </a>
                        </div>
                    </div>

                    <div>
                        <div
                            className={classNames(
                                fonts.h3,
                                margin.medium_bottom
                            )}
                        >
                            SKLEPNÍ KOJE
                        </div>
                        <div
                            className={classNames(
                                fonts.medium,
                                margin.medium_bottom
                            )}
                        >
                            <a
                                className={styles.pricelist_icon}
                                href="/pdf/1pp.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SvgIcon
                                    name="pdf"
                                    className={styles.pricelist_svg}
                                />
                                1. PP
                            </a>
                        </div>
                    </div>
                </div>

                <Section
                    noTopPadding
                    noBottomPadding
                    className={classNames(
                        fonts.regular,
                        styles.pricelist_taxinfo
                    )}
                >
                    {database.strings.cenik &&
                        database.strings.cenik.split("\n").map((i, key) => {
                            return (
                                <p key={key}>
                                    {i}
                                    <br />
                                </p>
                            );
                        })}
                </Section>
            </Section>
        );
    }
}

export default Pricelist;
