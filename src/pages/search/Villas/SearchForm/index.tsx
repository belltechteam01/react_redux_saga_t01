import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import styles from "./SearchForm.module.scss";

import SearchIcon from "../../../../assets/icons/search.svg";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../../../store";
import { ISearchKeyProps, ISearchProps } from "../../../../utils/commonType";
import { FILTER_KEYWORD } from "../../../../utils/constants";

const SearchForm = (props: ISearchProps) => {
    const [searchText, setSearchText] = useState<string>("");

    const { onChange } = props;

    const onChangeSearchText = (value: string) => {
        setSearchText(value);
    };

    const state = useSelector((state: RootReducerType) => state.search_villas);

    const { loading } = state;

    const onButtonClick = () => {
        const searchData: ISearchKeyProps = {
            key: FILTER_KEYWORD,
            value: searchText,
        };

        onChange(searchData);
    };

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
