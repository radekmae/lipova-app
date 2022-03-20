import React from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
// utils
import scrollTo from "utils/scrollTo";
// constants
import links from "constants/links";

export default function HeaderDesktop({ list }) {
    return (
        <div className={styles.header_desktop}>
            {links.map(({ id, offsetScroll, title }, idx) => (
                <React.Fragment key={id}>
                    <div
                        key={id}
                        className={classNames(
                            styles.header_desktop_link,
                            idx < 4 && styles.header_desktop_link_padding
                        )}
                        onClick={() => scrollTo(id, offsetScroll)}
                    >
                        {title}
                    </div>
                    {id === "prehledcen" && (
                        <div className={styles.header_desktop_logo_container}>
                            <div className={styles.header_desktop_logo} />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
