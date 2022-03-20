import React, { Component } from "react";
// ui-admin
import EditCard from "admin/ui-admin/EditCard";
// ui-web
import FormContacts from "admin/ui-web/FormContacts";

class EditContacts extends Component {
    render() {
        const { database } = this.props;

        return (
            database &&
            database.contacts.map((contact, idx) => {
                return (
                    <div key={idx}>
                        <EditCard title={contact.name}>
                            <FormContacts
                                idx={idx}
                                titleButton="Uložit změny"
                                data={contact}
                            />
                        </EditCard>
                    </div>
                );
            })
        );
    }
}

export default EditContacts;
