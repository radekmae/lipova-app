import React, { Component } from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
import margin from "web/vars/margin/margin.module.scss";
import {
    doChangeLockStatus,
    doChangeLockPass,
} from "admin/components/Firebase";

import Switch from "admin/ui-admin/Switch";

class Weblock extends Component {
    static defaultProps = {
        database: {},
    };

    initState = {
        pass: "",
    };
    state = {
        init: true,
    };

    static getDerivedStateFromProps(props, state) {
        if (state.init && !props.loading) {
            return {
                pass: props.settings.weblock.data.pass,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({ init: true });
        doChangeLockPass(this.state.pass);
    };

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ init: false });
        this.setState({ [event.target.name]: value });
    };

    onClickSwitch = () =>
        doChangeLockStatus(!this.props.settings.weblock.data.locked);

    render() {
        const { settings } = this.props;
        const { pass } = this.state;

        return (
            <div className={styles.lockadmin}>
                <div className={styles.lockadmin_content}>
                    <Switch
                        onChange={this.onClickSwitch}
                        value={!settings.weblock.data.locked}
                    />

                    <div
                        className={classNames(
                            fonts.h3,
                            fonts.bold,
                            settings.weblock.data.locked
                                ? fonts.red
                                : fonts.main_color_1
                        )}
                    >
                        {settings.weblock.data.locked
                            ? "Web uzamčen!"
                            : "Web je volně přístupný."}
                    </div>
                </div>
                {settings.weblock.data.locked && (
                    <div className={margin.small_top}>
                        <form onSubmit={this.onSubmit}>
                            <div className={styles.formprojects_input_title}>
                                Heslo
                            </div>
                            <input
                                className={styles.formprojects_input}
                                name="pass"
                                value={pass}
                                onChange={this.onChange}
                            />

                            <button
                                className={styles.formprojects_submit_button}
                                type="submit"
                            >
                                Uložit heslo
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default Weblock;
