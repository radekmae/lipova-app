import React, { Component } from "react";

// COMPONENTS
import EditCard from "admin/ui-admin/EditCard";
import FormTexts from "admin/ui-web/FormTexts";

class EditStrings extends Component {
    static defaultProps = {
        database: {},
    };

    render() {
        const { database } = this.props;
        return (
            <React.Fragment>
                <EditCard title="Ceník" subtitle="text">
                    <FormTexts
                        titleButton="Uložit změny"
                        text={database.strings.cenik}
                        srcFirebaseName="cenik"
                    />
                </EditCard>
                <EditCard title="Financování" subtitle="text">
                    <FormTexts
                        titleButton="Uložit změny"
                        text={database.strings.finance}
                        srcFirebaseName="finance"
                    />
                </EditCard>
            </React.Fragment>
        );
    }
}

export default EditStrings;
