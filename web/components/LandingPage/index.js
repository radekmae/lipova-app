// web ui
import IntroImage from "web/ui/IntroImage";
import About from "web/ui/About";
import Features from "web/ui/Features";
import InfoTable from "web/ui/InfoTable";
import Timeline from "web/ui/Timeline";
import Location from "web/ui/Location";
import HouseMap from "web/ui/HouseMap";
import Vizualization from "web/ui/Vizualization";
import Standards from "web/ui/Standards";
import Financing from "web/ui/Financing";
import Partners from "web/ui/Partners";
import Contact from "web/ui/Contact";
import Footer from "web/ui/Footer";

export default function LandingPage({ database }) {
    return (
        <>
            <IntroImage id="oprojektu" />
            <About database={database} />
            <Features database={database} id="lokalita" />
            <InfoTable database={database} />
            <Timeline database={database} />
            <Location database={database} />
            <HouseMap
                database={database}
                id="prehledbytu"
                idPricelist="prehledcen"
            />
            <Vizualization id="vizualizace" />
            <Standards database={database} id="standardy" />
            <Financing database={database} id="financovani" />
            <Partners database={database} id="partneri" />
            <Contact database={database} id="kontakt" />
            <Footer database={database} />
        </>
    );
}
