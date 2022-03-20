import EditFlats from "admin/ui-web/EditFlats";
import EditFloors from "admin/ui-web/EditFloors";
import EditLocation from "admin/ui-web/EditLocation";
import EditStandards from "admin/ui-web/EditStandards";
import EditStrings from "admin/ui-web/EditStrings";
import Weblock from "admin/ui-admin/Weblock";
import EditContacts from "admin/ui-web/EditContacts";

// service keys
const ADMIN = {
    FLATS: "flats",
    FLOORS: "floors",
    PINS: "pins",
    STANDARDS: "standards",
    STRINGS: "strings",
    WEBLOCK: "weblock",
    CONTACS: "contacts",
};

// features info
ADMIN.FEATURES = {
    [ADMIN.FLATS]: {
        fullwidth: true,
        title: "BYTY",
        subtitle: "Správa bytů",
    },
    [ADMIN.FLOORS]: {
        title: "SPRÁVA PODLAŽÍ",
        subtitle: "Možnost skrýt patra",
    },
    [ADMIN.PINS]: {
        title: "LOKALITA",
        subtitle: "Správa blízkých lokalit",
    },
    [ADMIN.STANDARDS]: {
        title: "STANDARDY",
        subtitle: "Správa standardů",
    },
    [ADMIN.STRINGS]: {
        title: "TEXTY",
        subtitle: "Úprava textů",
    },
    [ADMIN.WEBLOCK]: {
        title: "ZÁMEK WEBU",
        subtitle: "Zámek webu na volitelné heslo",
    },
    [ADMIN.CONTACS]: {
        title: "KONTAKTY",
        subtitle: "Správa kontaktních údajů",
    },
};

// features info
ADMIN.COMPONENTS = {
    [ADMIN.FLATS]: EditFlats,
    [ADMIN.FLOORS]: EditFloors,
    [ADMIN.PINS]: EditLocation,
    [ADMIN.STANDARDS]: EditStandards,
    [ADMIN.STRINGS]: EditStrings,
    [ADMIN.WEBLOCK]: Weblock,
    [ADMIN.CONTACS]: EditContacts,
};

ADMIN.ORDER = [
    ADMIN.FLATS,
    ADMIN.FLOORS,
    ADMIN.PINS,
    ADMIN.STANDARDS,
    ADMIN.STRINGS,
    ADMIN.WEBLOCK,
    ADMIN.CONTACS,
];

export default ADMIN;
