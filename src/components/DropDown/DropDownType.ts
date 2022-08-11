import { fType } from "../../utils/commonType";

export interface IFilterItem {
    label: string;
    value: string;
}

export interface IFilter {
    filtertype: string;
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
