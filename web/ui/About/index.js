import React from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "web/vars/fonts/fonts.module.scss";
import margin from "web/vars/margin/margin.module.scss";
// web ui
import Button from "web/ui/Button";
import Section from "web/ui/Section";
// utils
import scrollTo from "utils/scrollTo";

function handleScrollToContact() {
    scrollTo("prehledbytu", 20);
}

export default function About() {
    return (
        <>
            <Section className={fonts.center}>
                <div className={classNames(fonts.h3, margin.medium_bottom)}>
                    <div>Kdy luxus se stává standardem</div>

                    <div className={classNames(fonts.h1, styles.about_heading)}>
                        Rezidence Lipová – TILIA
                    </div>

                    <div>Brno – Masarykova čtvrť</div>
                </div>

                <div
                    className={classNames(fonts.regular, margin.medium_bottom)}
                >
                    <p>
                        V jedné z nejžádanějších lokalit v Brně – Masarykově
                        čtvrti nabízíme k prodeji novostavbu bytového domu
                        Rezidence Lipová – Tilia. Tato stavba respektuje moderní
                        trendy architektury, nabízí velmi klidné bydlení
                        v kombinaci s kvalitním vybavením všech bytových
                        jednotek a respektováním okolní zástavby. Projekt nabízí
                        celkem dvanáct bytových jednotek o dispozici 1+kk až
                        3+kk, parkovací stání a sklepní kóje. Součástí volných
                        ploch vnitrobloku, navazujících na bytový dům, budou
                        upravené parkové plochy s bio-jezírkem a altánem. Tato
                        relaxační plocha bude určena pro obyvatele rezidence.
                    </p>
                </div>

                <Button
                    onClick={handleScrollToContact}
                    large
                    title="- prohlédnout -"
                />
            </Section>

            <div className={styles.about_image} />
        </>
    );
}
