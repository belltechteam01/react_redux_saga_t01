import axios, { AxiosResponse } from "axios";

export const getData = async (params: any) => {
    const res: AxiosResponse = await axios.get(
        "http://localhost:3000/mockdata.json",
        params
    );

    return res.data;
};
