export declare type fType = (...arg: any) => void;
export interface ISearch {
    sort: string;
    type: string;
    keyword: string;
}

export interface ISearchKeyProps {
    key: string;
    value: string;
}

export interface ISearchProps {
    onChange: (param: ISearchKeyProps) => void;
}
