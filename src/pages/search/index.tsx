import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadingDataStart } from "../../store/search_module";
import { ISearch, ISearchKeyProps } from "../../utils/commonType";
import { SORT_DATE_ADDED, TYPE_APPARTMENT } from "../../utils/constants";
import Filters from "./Filters";
import styles from "./Search.module.scss";
import Villas from "./Villas";

const Search = () => {
    const dispatch = useDispatch();

    const initSearchData: ISearch = {
        sort: SORT_DATE_ADDED,
        type: TYPE_APPARTMENT,
        keyword: "",
    };

    const [searchVillaData, setSearchVillaData] =
        useState<ISearch>(initSearchData);

    const changeSearchVillaData = (data: ISearchKeyProps) => {
        setSearchVillaData({ ...searchVillaData, [data.key]: data.value });
    };

    useEffect(() => {
        dispatch(loadingDataStart(searchVillaData));
    }, [dispatch, searchVillaData]);

    return (
        <div className="container">
            <div className={styles["search-container"]}>
                <div className={styles["filters"]}>
                    <Filters onChange={changeSearchVillaData} />
                </div>
                <div className={styles["villas"]}>
                    <Villas onChange={changeSearchVillaData} />
                </div>
            </div>
        </div>
    );
};

export default Search;
