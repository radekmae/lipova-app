import React, { Component } from "react";
// ui-admin
import EditCard from "admin/ui-admin/EditCard";
// ui-web
import FormLocation from "admin/ui-web/FormLocation";

class EditLocation extends Component {
    static defaultProps = {
        database: {},
    };

    render() {
        const { database } = this.props;
        const pins = database.pins ? database.pins : {};

        return (
            <React.Fragment>
                {Object.values(pins)
                    .sort((a, b) => {
                        return a.date - b.date;
                    })
                    .map((pin, idx) => {
                        return (
                            <EditCard key={idx} title={pin.title}>
                                <FormLocation
                                    titleButton="Uložit změny"
                                    data={pin}
                                />
                            </EditCard>
                        );
                    })}
                <EditCard addNew title="Nová položka">
                    <FormLocation titleButton="Vložit" />
                </EditCard>
            </React.Fragment>
        );
    }
}

export default EditLocation;
