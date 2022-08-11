import React, { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import styles from "./SearchForm.module.scss";

import SearchIcon from "../../../../assets/icons/search.svg";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../../../store";
import { useDispatch } from "react-redux";
import { loadingDataStart } from "../../../../store/search_module";

const SearchForm = () => {
    const [searchText, setSearchText] = useState<string>("");

    const onChangeSearchText = (value: string) => {
        setSearchText(value);
    };

    const state = useSelector((state: RootReducerType) => state.search_villas);

    const { loading, data } = state;

    const dispatch = useDispatch();

    const onButtonClick = () => {
        dispatch(loadingDataStart());
    };

    console.log(" data ============>", data);

    return (
        <div className={styles["searchForm-wrapper"]}>
            <Input
                placeholder="Plaats, buurt, adres, etc."
                value={searchText}
                onChange={onChangeSearchText}
                prefixIcon={SearchIcon}
                classes={{
                    inputWrapper: styles.inputWrapper,
                    prefixIcon: styles.prefixIcon,
                    searchbox: styles.searchbox,
                }}
            />
            <Button
                label="Search"
                loading={loading}
                onClick={onButtonClick}
                classes={{
                    button: styles.button,
                    loading: styles.loading,
                }}
            />
        </div>
    );
};

export default SearchForm;
