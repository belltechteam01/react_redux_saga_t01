export interface IState {
    loading: boolean,
    data: Object,
    error_code: number
}

export interface IPayload {
    result: boolean
    data: Object,
    message: string,
    error_code? : number
};

export interface IAction {
    type: string,
    payload: IPayload
};
