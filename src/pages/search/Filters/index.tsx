import React, { useState } from "react";
import DropDown from "../../../components/DropDown";
import {
    IFilterItem,
    SORT,
    TYPE,
} from "../../../components/DropDown/DropDownType";

import styles from "./Filters.module.scss";

const Filters = () => {
    const [sortValue, setSortValue] = useState<IFilterItem>(SORT.items[0]);

    const [typeValue, setTypeValue] = useState<IFilterItem>(TYPE.items[0]);

    const handleSortChange = (updatevalue: IFilterItem) => {
        setSortValue(updatevalue);
    };

    const handleTypeChange = (updateValue: IFilterItem) => {
        setTypeValue(updateValue);
    };
    return (
        <div className={styles["filter-wrapper"]}>
            <DropDown
                items={SORT.items}
                value={sortValue}
                prefix={SORT.prefix}
                onChange={handleSortChange}
                classes={{
                    dropdown: styles.dropdown,
                    toggle: styles.toggle,
                    label: styles.label,
                    prefix: styles.prefix,
                    content: styles.content,
                    itemlist: styles.itemlist,
                    item: styles.item,
                    active: styles.active,
                }}
            />
            <DropDown
                items={TYPE.items}
                value={typeValue}
                prefix={TYPE.prefix}
                onChange={handleTypeChange}
                classes={{
                    dropdown: styles.dropdown,
                    toggle: styles.toggle,
                    label: styles.label,
                    prefix: styles.prefix,
                    content: styles.content,
                    itemlist: styles.itemlist,
                    item: styles.item,
                    active: styles.active,
                }}
            />
        </div>
    );
};

export default Filters;
