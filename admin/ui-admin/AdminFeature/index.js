import React from "react";
import SectionDropdown from "admin/ui-admin/SectionDropdown";
import ADMIN from "constants/admin";
import { useDatabaseContext } from "admin/components/Database";

export default function AdminFeature({ type, title, subtitle }) {
    const { database, settings } = useDatabaseContext();

    const Feature = ADMIN.COMPONENTS[type];
    return (
        <SectionDropdown id={type} title={title} subtitle={subtitle}>
            <Feature database={database} settings={settings} />
        </SectionDropdown>
    );
}
