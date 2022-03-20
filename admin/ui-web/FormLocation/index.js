import React from "react";
// styles
import styles from "./styles.module.scss";
// components
import { doAddPin, doEditPin, doDeletePin } from "admin/components/Firebase";
// ui-admin
import Icon from "admin/ui-admin/Icon";
// ui-web
import Flags from "admin/ui-web/Flags";

class FormLocation extends React.Component {
    initState = {
        title: "",
        flag: "bicycle",
    };
    state = {
        ...this.initState,
        init: true,
    };

    imageRef = React.createRef();

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
        if (data.uuid) {
            doEditPin(data, this.props.src);
        } else {
            doAddPin(data, this.props.src);
            this.setState({ ...this.initState, init: true });
        }
    };

    deletePin = () => {
        doDeletePin(this.state.uuid);
    };

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ init: false, [event.target.name]: value });
    };

    onChangeFlag = (flag) => {
        this.setState({ init: false, flag });
    };

    render() {
        const { title, flag, uuid } = this.state;
        const { titleButton } = this.props;

        return (
            <div className={styles.formprojects_form}>
                {uuid && (
                    <div
                        onClick={this.deletePin}
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
                        name="title"
                        value={title}
                        onChange={this.onChange}
                    />

                    <div className={styles.formprojects_input_title}>Ikona</div>

                    <Flags active={flag} onChange={this.onChangeFlag} />

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

export default FormLocation;
