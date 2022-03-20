import React, { Component } from "react";
import styles from "./style.module.scss";

// COMPONENTS
import EditCard from "admin/ui-admin/EditCard";
import FormStandards from "admin/ui-web/FormStandards";

class EditStandards extends Component {
    static defaultProps = {
        database: {},
    };

    render() {
        const { database } = this.props;
        const system =
            database.standards && database.standards.system
                ? database.standards.system
                : {};
        const flats =
            database.standards && database.standards.flats
                ? database.standards.flats
                : {};
        const house =
            database.standards && database.standards.house
                ? database.standards.house
                : {};

        return (
            <React.Fragment>
                <div className={styles.editstandards_title}>
                    Konstrukční systém
                </div>
                {Object.values(system)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((item, idx) => {
                        return (
                            <EditCard
                                key={idx}
                                title={item.name}
                                subtitle="standard"
                            >
                                <FormStandards
                                    titleButton="Uložit změny"
                                    data={item}
                                    src="system"
                                />
                            </EditCard>
                        );
                    })}
                <EditCard addNew title="Nová položka">
                    <FormStandards titleButton="Vložit" src="system" />
                </EditCard>

                <div className={styles.editstandards_title}>
                    Standardy bytových jednotek
                </div>
                {Object.values(flats)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((item, idx) => {
                        return (
                            <EditCard
                                key={idx}
                                title={item.name}
                                subtitle="standard"
                            >
                                <FormStandards
                                    titleButton="Uložit změny"
                                    data={item}
                                    src="flats"
                                />
                            </EditCard>
                        );
                    })}
                <EditCard addNew title="Nová položka">
                    <FormStandards titleButton="Vložit" src="flats" />
                </EditCard>

                <div className={styles.editstandards_title}>
                    Standardy společných prostor
                </div>
                {Object.values(house)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((item, idx) => {
                        return (
                            <EditCard
                                key={idx}
                                title={item.name}
                                subtitle="standard"
                            >
                                <FormStandards
                                    titleButton="Uložit změny"
                                    data={item}
                                    src="house"
                                />
                            </EditCard>
                        );
                    })}
                <EditCard addNew title="Nová položka">
                    <FormStandards titleButton="Vložit" src="house" />
                </EditCard>
            </React.Fragment>
        );
    }
}

export default EditStandards;
