import { fType } from "../../utils/commonType";

export interface IButtonProps {
    label: string;
    onClick: fType;
    classes?: any;
    loading: boolean;
}
