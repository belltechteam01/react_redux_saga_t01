import React, { useState } from "react";
import DropDown from "../../../components/DropDown";
import { IFilterItem } from "../../../components/DropDown/DropDownType";
import { ISearchKeyProps, ISearchProps } from "../../../utils/commonType";
import { FILTER_SORT, FILTER_TYPE, SORT, TYPE } from "../../../utils/constants";

import styles from "./Filters.module.scss";

const Filters = (props: ISearchProps) => {
    const { onChange } = props;
    const [sortValue, setSortValue] = useState<IFilterItem>(SORT.items[0]);
    const [typeValue, setTypeValue] = useState<IFilterItem>(TYPE.items[0]);

    const handleSortChange = (updatevalue: IFilterItem) => {
        setSortValue(updatevalue);
        const newData: ISearchKeyProps = {
            key: FILTER_SORT,
            value: updatevalue.value,
        };

        updateData(newData);
    };

    const handleTypeChange = (updateValue: IFilterItem) => {
        setTypeValue(updateValue);

        const newData: ISearchKeyProps = {
            key: FILTER_TYPE,
            value: updateValue.value,
        };

        updateData(newData);
    };

    const updateData = (value: ISearchKeyProps) => {
        onChange(value);
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
