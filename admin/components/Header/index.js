import LoginHeader from "admin/ui-admin/LoginHeader";
import AdminHeader from "admin/ui-admin/AdminHeader";
import AccountHeader from "admin/ui-admin/AccountHeader";

export default function Header({ page }) {
    const components = {
        login: LoginHeader,
        account: AccountHeader,
        settings: AccountHeader,
        admin: AdminHeader,
    };

    const Component = components[page];

    return <Component page={page} />;
}
