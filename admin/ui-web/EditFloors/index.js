import React, { Component } from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
// components
import { doEditFloor } from "admin/components/Firebase";
// ui-admin
import Switch from "admin/ui-admin/Switch";

class EditFloors extends Component {
    onClickSwitch = (floor) => () => {
        doEditFloor({
            ...floor,
            isAvailable: !floor.isAvailable,
        });
    };

    render() {
        const { database } = this.props;

        return (
            <div className={styles.floors_table}>
                <div className={styles.floors_table_line}>
                    <div
                        className={classNames(
                            styles.floors_table_row,
                            fonts.table_header
                        )}
                    >
                        <div>Objekt</div>
                        <div>Označení</div>
                        <div> </div>
                    </div>
                </div>
                {database &&
                    database.floors.map((floor, idx) => {
                        return (
                            <div
                                key={idx}
                                className={classNames(
                                    styles.floors_table_line,
                                    fonts.table_row
                                )}
                            >
                                <div className={styles.floors_table_row}>
                                    <div style={{ textTransform: "uppercase" }}>
                                        {floor.objekt}
                                    </div>
                                    <div>{floor.oznaceni}</div>
                                    <div>
                                        <Switch
                                            onChange={this.onClickSwitch(floor)}
                                            value={floor.isAvailable}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}

export default EditFloors;
