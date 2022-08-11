import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";
import { IInputProps } from "./InputType";

const Input = (props: IInputProps) => {
    const { placeholder, value, prefixIcon, onChange, classes } = props;

    return (
        <div className={cn(styles.inputWrapper, classes.inputWrapper)}>
            {prefixIcon && (
                <img
                    className={cn(styles.prefixIcon, classes.prefixIcon)}
                    src={prefixIcon}
                    alt="Icon"
                />
            )}
            <input
                className={cn(styles.searchbox, classes.searchbox)}
                type="text"
                placeholder={placeholder || ""}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default Input;
