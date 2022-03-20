import React from "react";
// styles
import styles from "./styles.module.scss";
// components
import {
    doAddStandard,
    doEditStandard,
    doDeleteStandard,
} from "admin/components/Firebase";
// ui-admin
import Icon from "admin/ui-admin/Icon";

class FormStandards extends React.Component {
    constructor(props) {
        super(props);

        this.initState = {
            name: "",
            desc: "",
        };

        this.state = {
            ...this.initState,
            init: true,
        };
    }

    imageRef = React.createRef();

    static getDerivedStateFromProps(props, state) {
        if (state.init && !props.loading) {
            return {
                ...props.data,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        delete data["init"];
        if (data.uuid) {
            doEditStandard(data, this.props.src);
        } else {
            doAddStandard(data, this.props.src);
            //document.getElementById("form").reset();
            this.setState({ ...this.initState, init: true });
        }
    };

    deleteStandard = () => {
        doDeleteStandard(this.state.uuid, this.props.src);
    };

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ init: false });
        this.setState({ [event.target.name]: value });
    };

    render() {
        const { name, desc, uuid } = this.state;
        const { titleButton } = this.props;

        return (
            <div className={styles.formprojects_form}>
                {uuid && (
                    <div
                        onClick={this.deleteStandard}
                        className={styles.formprojects_button}
                    >
                        <Icon
                            name="waste-bin"
                            className={styles.formprojects_button_icon}
                        />
                    </div>
                )}

                <form onSubmit={this.onSubmit}>
                    <div className={styles.formprojects_input_title}>
                        Titulek
                    </div>
                    <input
                        className={styles.formprojects_input}
                        name="name"
                        value={name}
                        onChange={this.onChange}
                    />

                    <div className={styles.formprojects_input_title}>Text</div>
                    <textarea
                        className={styles.formprojects_input}
                        name="desc"
                        value={desc}
                        onChange={this.onChange}
                    />

                    <button
                        className={styles.formprojects_submit_button}
                        type="submit"
                    >
                        {titleButton}
                    </button>
                </form>
            </div>
        );
    }
}

export default FormStandards;
