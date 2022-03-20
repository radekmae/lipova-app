import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery-next";
import Carousel, { Modal, ModalGateway } from "react-images";
// styles
import styles from "./style.module.scss";
// web ui
import Title from "web/ui/Title";
import Section from "web/ui/Section";
import SectionDropdown from "web/ui/SectionDropdown";

const Vizualization = ({ id }) => {
    const images = [
        {
            src: "/web/images/vizualization/img1.jpg",
            width: 2,
            height: 1.25,
        },
        {
            src: "/web/images/vizualization/img2.jpg",
            width: 2,
            height: 1.25,
        },
        {
            src: "/web/images/vizualization/img3.jpg",
            width: 2,
            height: 1.25,
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className={styles.vizualizace}>
            <Section fullWidth id={id}>
                <Title text="Vizualizace" />

                <div className={styles.vizualizace_mobile}>
                    <SectionDropdown grey initialHeight={500} time={1}>
                        <Gallery
                            margin={4}
                            photos={images}
                            onClick={openLightbox}
                        />
                    </SectionDropdown>
                </div>

                <div className={styles.vizualizace_desktop}>
                    <Gallery
                        margin={4}
                        photos={images}
                        onClick={openLightbox}
                    />
                </div>

                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={images.map((x) => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </Section>
        </div>
    );
};

export default Vizualization;
