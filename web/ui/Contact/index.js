import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
import margin from "../../vars/margin/margin.module.scss";
// UI
import Title from "../../ui/Title";
import SvgIcon from "../../ui/SvgIcon";
import Section from "../../ui/Section";

const Contact = ({ id, database }) => {
    return (
        <div id={id} className={classNames(fonts.regular, styles.kontakt)}>
            <Section>
                <Title white text="Kontakt" />

                <div
                    className={classNames(
                        styles.kontakt_content,
                        margin.medium_top
                    )}
                >
                    <div>
                        <a
                            href="https://vlpartneri.cz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.kontakt_logo} />
                        </a>
                    </div>

                    {database.contacts.map((contact, idx) => (
                        <div
                            key={idx}
                            className={classNames(
                                styles.kontakt_content_2,
                                idx === 1 && styles.kontakt_content_2_margin
                            )}
                        >
                            <div
                                className={classNames(
                                    fonts.h3,
                                    fonts.white,
                                    fonts.bold
                                )}
                            >
                                {contact.name}
                            </div>

                            <div className={styles.kontakt_line}>
                                <SvgIcon
                                    name="phone"
                                    className={styles.kontakt_icon}
                                />
                                {contact.phone}
                            </div>

                            {contact.email && (
                                <div className={styles.kontakt_line_2}>
                                    <SvgIcon
                                        name="mail"
                                        className={styles.kontakt_icon_2}
                                    />
                                    <a
                                        className={styles.kontakt_link}
                                        href={"mailto:" + contact.email}
                                    >
                                        {contact.email}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Contact;
