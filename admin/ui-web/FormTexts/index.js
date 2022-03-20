import React from "react";
import classNames from "classnames";
// styles
import styles from "./styles.module.scss";
// components
import { doEditTexts } from "admin/components/Firebase";

class FormTexts extends React.Component {
    constructor(props) {
        super(props);

        this.initState = {
            text: "",
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
                text: props.text,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    onSubmit = (event) => {
        event.preventDefault();
        doEditTexts(this.state.text, this.props.srcFirebaseName);
        //document.getElementById("form").reset();
        this.setState({ ...this.initState, init: true });
    };

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ init: false });
        this.setState({ [event.target.name]: value });
    };

    render() {
        const { text } = this.state;
        const { titleButton } = this.props;

        return (
            <div className={styles.formprojects_form}>
                <form onSubmit={this.onSubmit}>
                    <div className={styles.formprojects_input_title}>Text</div>
                    <textarea
                        className={classNames(
                            styles.formprojects_input,
                            styles.formprojects_textarea
                        )}
                        name="text"
                        value={text}
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

export default FormTexts;
