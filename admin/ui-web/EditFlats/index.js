import React, { Component } from "react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/cs";

import styles from "./style.module.scss";
import fonts from "admin/vars/fonts/fonts.module.scss";
// ui-admin
import Icon from "admin/ui-admin/Icon";
import Switch from "admin/ui-admin/Switch";
import SvgIcon from "admin/ui-admin/SvgIcon";

import { doEditFlat } from "admin/components/Firebase";

class EditFlats extends Component {
    static defaultProps = {
        database: {},
    };

    state = {
        active: -1,
    };

    componentDidMount() {
        moment.locale("cs");
    }

    onEditClick = (flat) => () => {
        this.setState({ active: flat.id, ...flat });
    };

    onClickSwitch = (flat) => () => {
        doEditFlat({
            ...flat,
            isAvailable: !flat.isAvailable,
        });
    };

    onClickRK = (flat) => () => {
        if (this.state.active !== -1) {
            this.setState({ isRk: !flat.isRk });
        }
        doEditFlat({
            ...flat,
            isRk: !flat.isRk,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        delete data["active"];
        this.setState({ active: -1 });
        doEditFlat(data);
    };

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ [event.target.name]: value });
    };

    render() {
        const { database } = this.props;
        const {
            active,
            objekt,
            podlazi,
            oznaceni,
            dispozice,
            vymera,
            balkon,
            terasa,
            cena,
        } = this.state;

        return (
            <div className={styles.flats_table_container}>
                <div className={styles.flats_table}>
                    <div className={styles.flats_table_line}>
                        <div
                            className={classNames(
                                styles.flats_table_row,
                                fonts.table_header
                            )}
                        >
                            <div>V prodeji</div>
                            <div>Objekt</div>
                            <div>Podlaží</div>
                            <div>Označení</div>
                            <div>Dispozice</div>
                            <div>Výměra</div>
                            <div>Balkon</div>
                            <div>Terasa</div>
                            <div>Sklep</div>
                            <div>Cena</div>
                            <div>Karty bytů</div>
                            <div> </div>
                        </div>
                    </div>
                    {database &&
                        database.flats.map((flat, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={classNames(
                                        styles.flats_table_line,
                                        fonts.table_row
                                    )}
                                >
                                    <div className={styles.flats_table_row}>
                                        <div>
                                            <Switch
                                                onChange={this.onClickSwitch(
                                                    flat
                                                )}
                                                value={flat.isAvailable}
                                            />
                                        </div>
                                        <div>{flat.objekt}</div>
                                        <div>{flat.podlazi}</div>
                                        <div>{flat.oznaceni}</div>
                                        <div>{flat.dispozice}</div>
                                        <div>{flat.vymera}</div>
                                        <div>{flat.balkon}</div>
                                        <div>{flat.terasa}</div>
                                        <div>
                                            {flat.sklep && (
                                                <SvgIcon
                                                    name="checked"
                                                    className={
                                                        styles.flats_table_svg_checkmark
                                                    }
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <div
                                                onClick={this.onClickRK(flat)}
                                                className={classNames(
                                                    styles.label,
                                                    !flat.isRk &&
                                                        styles.label_disabled
                                                )}
                                            >
                                                Na dotaz v RK
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className={
                                                    styles.flats_row_pdflink
                                                }
                                                href={
                                                    "web/pdf/" +
                                                    flat.pdf +
                                                    ".pdf"
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <SvgIcon
                                                    name="pdf"
                                                    className={
                                                        styles.flats_table_svg_icon
                                                    }
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            {active !== flat.id && (
                                                <Icon
                                                    onClick={this.onEditClick(
                                                        flat
                                                    )}
                                                    name="edit"
                                                    className={
                                                        styles.flats_table_svg
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {active === flat.id && (
                                        <form onSubmit={this.onSubmit}>
                                            <div
                                                className={
                                                    styles.flats_table_row
                                                }
                                            >
                                                <div></div>
                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="objekt"
                                                        value={objekt}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="podlazi"
                                                        value={podlazi}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="oznaceni"
                                                        value={oznaceni}
                                                        onChange={this.onChange}
                                                    />
                                                </div>

                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="dispozice"
                                                        value={dispozice}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="vymera"
                                                        value={vymera}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="balkon"
                                                        value={balkon}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className={
                                                            styles.flats_input
                                                        }
                                                        name="terasa"
                                                        value={terasa}
                                                        onChange={this.onChange}
                                                    />
                                                </div>

                                                <div></div>
                                                <div>
                                                    <input
                                                        className={classNames(
                                                            styles.flats_input,
                                                            flat.isRk &&
                                                                styles.flats_input_disabled
                                                        )}
                                                        name="cena"
                                                        value={cena}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div></div>
                                                <div>
                                                    <button type="submit">
                                                        <SvgIcon
                                                            name="checked"
                                                            className={
                                                                styles.flats_table_svg
                                                            }
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default EditFlats;
