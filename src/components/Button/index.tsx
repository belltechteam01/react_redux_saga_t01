import React from "react";
import { IButtonProps } from "./ButtonType";
import cn from "classnames";
import styles from "./Button.module.scss";
import LoadingIcon from "../../assets/icons/loading.svg";

const Button = (props: IButtonProps) => {
    const { onClick, label, classes, loading } = props;

    const onButtonClick = () => {
        if (loading) {
            return;
        }

        onClick();
    };
    return (
        <button
            className={cn(styles.button, classes.button)}
            onClick={onButtonClick}
        >
            {label}
            {loading && (
                <div className={cn(styles.loading, classes.loading)}>
                    <img
                        src={LoadingIcon}
                        alt="loadingIcon"
                        className={cn(styles.indicator, classes.indicator)}
                    />
                </div>
            )}
        </button>
    );
};

export default Button;
