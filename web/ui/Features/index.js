import React from "react";
import classNames from "classnames";
// SCSS
import styles from "./style.module.scss";
import fonts from "../../vars/fonts/fonts.module.scss";
import margin from "../../vars/margin/margin.module.scss";
// COMPONENTS
import Title from "../../ui/Title";
import Section from "../../ui/Section";

const Features = ({ id }) => (
    <Section id={id} className={classNames(fonts.regular, fonts.center)}>
        <div className={classNames(fonts.h3, margin.medium_bottom)}>
            <div>MĚSTSKÁ ČÁST</div>
            <div className={classNames(fonts.h1, styles.features_heading)}>
                BRNO - STŘED
            </div>
        </div>

        <div className={classNames(fonts.regular, margin.large_bottom)}>
            Bydlet v Masarykově čtvrti znamená mít opravdu dobrou adresu.
            <br />
            Je to ulice, co vám dopřeje klid. V městské části Brno - střed,
            <br />
            jedné z nejlepších brněnských čtvrtí, a se vším potřebným
            <br />
            k pohodlnému životu v nejbližším okolí.
            <br />
            <br />
            Vítejte!
        </div>

        <div
            className={classNames(
                margin.large_bottom,
                fonts.right,
                styles.features_row
            )}
        >
            <div className={styles.features_cell}>
                <Title right text="LOKALITA" />
                Masarykova čtvrť je jedna z nejžádanějších lokalit v Brně a je
                evidentní proč. V okolí můžete nasát atmosféru prvorepublikových
                vil a funkcionalistického Brna. V těsné blízkosti je cyklostezka
                při ulici Výstavní, Wilsonův les, park Anthropost a Žlutý kopec.
                V blízkosti je veškerá občanská vybavenost.
            </div>
            <div className={styles.features_image_cont}>
                <div
                    className={classNames(
                        styles.features_image,
                        styles.features_image_1
                    )}
                />
            </div>
        </div>
        <div
            className={classNames(
                margin.large_bottom,
                fonts.left,
                styles.features_row
            )}
        >
            <div className={styles.features_image_cont}>
                <div
                    className={classNames(
                        styles.features_image,
                        styles.features_image_2
                    )}
                />
            </div>
            <div className={styles.features_cell}>
                <Title left text="DOSTUPNOST" />
                Díky své poloze projekt Rezidence Lipová přináší svobodu v
                dostupnosti všeho potřebného. Pěšky budete v centru Brna za pár
                minut. V případě, že budete potřebovat zrelaxovat, klidové
                lokality a parky jsou v docházkové vzdálenosti. Autem se velmi
                rychle dostanete do centra Brna, napojení na dálnici D1 nebo na
                městský okruh v Brně.
            </div>
        </div>
        <div className={classNames(styles.features_row, fonts.right)}>
            <div className={styles.features_cell}>
                <Title right text="KOMFORT" />
                Velmi kvalitní zřizovací předměty všech bytových jednotek je
                v projektu standardem, o kterém se můžete přesvědčit
                v katalozích zřizovacích předmětů. Rekuperační jednotky,
                klimatizace, elektrické předokenní žaluzie jsou samozřejmostí.
                Navíc pro majitele všech bytů budou k dispozici parkové plochy s
                bio-jezírkem a altánem.
            </div>
            <div className={styles.features_image_cont}>
                <div
                    className={classNames(
                        styles.features_image,
                        styles.features_image_3
                    )}
                />
            </div>
        </div>
    </Section>
);

export default Features;
