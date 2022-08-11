import React from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../../../store";
import LoadingItem from "../LoadingItem";
import VillaItem from "../VillaItem";
import styles from "./VillaList.module.scss";

const VillaList = () => {
    const state = useSelector((state: RootReducerType) => state.search_villas);

    const { loading, data } = state;

    return (
        <div className={styles.villaList}>
            {!loading
                ? (data || []).map((villa) => (
                      <VillaItem key={villa.id} {...villa} />
                  ))
                : [0, 1, 2, 3, 4, 5].map((i) => <LoadingItem key={i} />)}
        </div>
    );
};

export default VillaList;
