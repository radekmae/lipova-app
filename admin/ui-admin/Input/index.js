import { useState, useRef } from "react";
import classNames from "classnames";
// styles
import styles from "./style.module.scss";

export default function Input({
    type,
    elastic,
    placeholder,
    disabled,
    autoComplete,
    value: inputValue,
    onChange,
}) {
    const [width, setWidth] = useState(50);
    const [focus, setFocus] = useState(false);
    const inputRef = useRef(null);
    const helperRef = useRef(null);

    const handleFocus = () => inputRef.current.focus();

    const handleFocusIn = () => {
        if (disabled) return false;
        setFocus(true);
    };

    const handleFocusOut = () => setFocus(false);

    return (
        <div className={styles.container}>
            <span
                ref={helperRef}
                style={{
                    whiteSpace: "pre",
                    position: "absolute",
                    top: "-100%",
                    opacity: 0,
                }}
            >
                {inputValue}
            </span>

            <div
                className={classNames(
                    styles.input,
                    focus && styles.input_focus
                )}
                onClick={handleFocus}
                style={{ width: elastic && width }}
            >
                <input
                    type={type}
                    autoComplete={autoComplete}
                    ref={inputRef}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={inputValue}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                    onChange={({ target: { value } }) => {
                        onChange(value);
                        elastic &&
                            setTimeout(() => {
                                const width = Math.ceil(
                                    helperRef.current.offsetWidth
                                );
                                setWidth(width > 50 ? width : 50);
                            });
                    }}
                />
            </div>
        </div>
    );
}
