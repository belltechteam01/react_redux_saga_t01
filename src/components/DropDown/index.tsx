import React, { useEffect, useState } from "react";
import { IDropDownProps, IFilterItem } from "./DropDownType";

import { ReactComponent as DropDownIcon } from "../../assets/icons/dropdown.svg";
import uniqId from "uniqid";
import { useMemo } from "react";
import styles from "./DropDown.module.scss";
import cn from "classnames";

function DropDown(props: IDropDownProps) {
    const { prefix, value, items, onChange, classes } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IFilterItem>(value);

    const id = useMemo(() => uniqId(), []);

    useEffect(() => {
        const onWindowClick = (e: MouseEvent) => {
            const elm = e.target as HTMLElement;
            if (!elm.closest(`#${id}`)) {
                setIsOpen(false);
            }
        };
        window.addEventListener("click", onWindowClick);
        return () => {
            window.removeEventListener("click", onWindowClick);
        };
    }, []);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    const onSelect = (item: IFilterItem) => {
        const isInSelected = selectedItem && selectedItem.value === item.value;

        if (isInSelected) {
            setIsOpen(false);
            return;
        }

        setIsOpen(false);

        setSelectedItem(item);

        setItemValue(item);
    };

    const setItemValue = (item: IFilterItem) => {
        onChange && onChange(item);
    };

    return (
        <div id={id} className={cn(styles.dropdown, classes.dropdown)}>
            <button
                className={cn(styles.toggle, classes.toggle)}
                onClick={onToggle}
            >
                <span className={cn(styles.prefix, classes.prefix)}>
                    {prefix}
                </span>
                <span className={cn(styles.label, classes.label)}>
                    {value.label}
                </span>

                <DropDownIcon className={cn(styles.icon, classes.icon)} />
            </button>
            {isOpen && (
                <div className={cn(styles.content, classes.content)}>
                    <ul className={cn(styles.itemlist, classes.itemlist)}>
                        {items &&
                            items.map((item, i) => (
                                <li
                                    key={item.value}
                                    onClick={() => onSelect(item)}
                                >
                                    <span
                                        className={cn(
                                            styles.item,
                                            classes.item,
                                            {
                                                [styles.active]:
                                                    selectedItem &&
                                                    selectedItem.value ===
                                                        item.value,
                                                [classes.active]:
                                                    selectedItem &&
                                                    selectedItem.value ===
                                                        item.value,
                                            }
                                        )}
                                    >
                                        {item.label}
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDown;
