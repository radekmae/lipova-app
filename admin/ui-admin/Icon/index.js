import React from "react";
import classNames from "classnames";

export default function Icon({ className, name, onClick }) {
    return (
        <i
            className={classNames(`flaticon-${name}`, className)}
            onClick={onClick}
        />
    );
}
