export const SORT: IFilter = {
    prefix: "Sort By",
    items: [
        {
            label: "Date added",
            value: "date added",
        },
        {
            label: "Highest price",
            value: "highest price",
        },
        {
            label: "Lowest price",
            value: "lowest price",
        },
    ],
};

export const TYPE: IFilter = {
    prefix: "Type",
    items: [
        {
            label: "Appartment",
            value: "Appartment",
        },
        {
            label: "Villa",
            value: "villa",
        },
        {
            label: "Townhouse",
            value: "townhouse",
        },
    ],
};

export interface IFilterItem {
    label: string;
    value: string;
}

export interface IFilter {
    prefix: string;
    items: IFilterItem[];
}

export interface IDropDownProps {
    items: IFilterItem[];
    value: IFilterItem;
    prefix: string;
    onChange: fType;
    classes?: any;
}

export declare type fType = (...arg: any) => void;
