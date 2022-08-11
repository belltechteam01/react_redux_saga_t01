import React from "react";
import { ISearchProps } from "../../../utils/commonType";
import SearchForm from "./SearchForm";
import VillaList from "./VillaList";

const Villas = (props: ISearchProps) => {
    const { onChange } = props;

    return (
        <>
            <SearchForm onChange={onChange} />
            <VillaList />
        </>
    );
};

export default Villas;
