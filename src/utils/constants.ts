import { IFilter } from "../components/DropDown/DropDownType";

export const FILTER_SORT = "sort";
export const FILTER_TYPE = "type";
export const FILTER_KEYWORD = "keyword";

export const SORT_DATE_ADDED = "date added";
export const SORT_HIGH_PRICE = "highest price";
export const SORT_LOW_PRICE = "lowest price";

export const TYPE_APPARTMENT = "appartment";
export const TYPE_VILLA = "villa";
export const TYPE_TOWNHOUSE = "townhouse";

export const SORT: IFilter = {
    filtertype: FILTER_SORT,
    prefix: "Sort By",
    items: [
        {
            label: "Date added",
            value: SORT_DATE_ADDED,
        },
        {
            label: "Highest price",
            value: SORT_HIGH_PRICE,
        },
        {
            label: "Lowest price",
            value: SORT_LOW_PRICE,
        },
    ],
};

export const TYPE: IFilter = {
    filtertype: FILTER_TYPE,
    prefix: "Type",
    items: [
        {
            label: "Appartment",
            value: TYPE_APPARTMENT,
        },
        {
            label: "Villa",
            value: TYPE_VILLA,
        },
        {
            label: "Townhouse",
            value: TYPE_TOWNHOUSE,
        },
    ],
};
