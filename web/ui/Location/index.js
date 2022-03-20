import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
import margin from "../../vars/margin/margin.module.scss";
// UI
import Icon from "../../ui/Icon";
import Title from "../../ui/Title";
import Section from "../../ui/Section";
import SvgIcon from "../../ui/SvgIcon";

class Location extends React.Component {
    state = {
        isDisabled: false,
    };

    closeOverlay = () => this.setState({ isDisabled: true });

    render() {
        const pins = this.props.database.pins ? this.props.database.pins : {};

        return (
            <React.Fragment>
                <Section noBottomPadding>
                    <Title text="Lokalita" />
                </Section>

                <div id={this.props.id} className={styles.location_image}>
                    <div
                        onClick={this.closeOverlay}
                        className={classNames(
                            styles.location_overlay,
                            this.state.isDisabled &&
                                styles.location_overlay_disabled
                        )}
                    >
                        <div className={styles.location_overlay_content}>
                            <Icon
                                name="magnifying-glass"
                                className={styles.location_overlay_icon}
                            />
                            <div
                                className={classNames(
                                    styles.location_overlay_title,
                                    fonts.button_small
                                )}
                            >
                                Kliknutím začněte
                            </div>
                        </div>
                    </div>
                    {/* <iframe
                        title="unique"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1trjF2YnAdJVgPqA3wK9m0j5iBTLazKfU"
                        style={{ width: "100%", height: "100%" }}
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                        samesite="none"
                    ></iframe> */}

                    <iframe
                        title="uniq"
                        src="https://www.google.com/maps/d/embed?mid=1neZanXATnNn9MfwqgrBpSBLMjE03ev7P"
                        style={{ width: "100%", height: "100%" }}
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                        samesite="none"
                        loading="lazy"
                    ></iframe>
                </div>

                <Section
                    noTopPadding
                    noBottomPadding
                    className={classNames(
                        fonts.regular,
                        styles.location_section,
                        margin.medium_top
                    )}
                >
                    {Object.values(pins)
                        .sort((a, b) => {
                            return a.date - b.date;
                        })
                        .map((pin, idx) => {
                            return (
                                <div key={idx} className={styles.location_pin}>
                                    <SvgIcon
                                        name={pin.flag}
                                        className={styles.location_pin_icon}
                                    />
                                    {pin.title}
                                </div>
                            );
                        })}
                </Section>
            </React.Fragment>
        );
    }
}

export default Location;
