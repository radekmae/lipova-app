import React from "react";

import styles from "./styles.module.scss";
import { doEditContact } from "admin/components/Firebase";

class FormContacts extends React.Component {
    constructor(props) {
        super(props);

        this.initState = {
            email: "",
            name: "",
            phone: "",
        };

        this.state = {
            ...this.initState,
            init: true,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.init && !props.loading) {
            return {
                ...props.data,
            };
        }
        return null;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        delete data["init"];
        doEditContact(data, this.props.idx);
        this.setState({ init: true });
    };

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ init: false });
        this.setState({ [event.target.name]: value });
    };

    render() {
        const { email, name, phone } = this.state;

        return (
            <div className={styles.formprojects_form}>
                <form onSubmit={this.onSubmit}>
                    <div className={styles.formprojects_input_title}>Jméno</div>
                    <input
                        className={styles.formprojects_input}
                        name="name"
                        value={name}
                        onChange={this.onChange}
                    />

                    <div className={styles.formprojects_input_title}>
                        Telefon
                    </div>
                    <input
                        className={styles.formprojects_input}
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                    />
                    <div className={styles.formprojects_input_title}>Email</div>
                    <input
                        className={styles.formprojects_input}
                        name="email"
                        value={email}
                        onChange={this.onChange}
                    />
                    <button
                        className={styles.formprojects_submit_button}
                        type="submit"
                    >
                        Uložit
                    </button>
                </form>
            </div>
        );
    }
}

export default FormContacts;
