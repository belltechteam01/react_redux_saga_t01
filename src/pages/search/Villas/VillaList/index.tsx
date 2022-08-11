import React from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../../../store";
import VillaItem from "../VillaItem";
import styles from "./VillaList.module.scss";

const VillaList = () => {
    const state = useSelector((state: RootReducerType) => state.search_villas);

    const { loading, data } = state;

    return (
        <div className={styles.villaList}>
            {!loading ? (
                (data || []).map((villa) => (
                    <VillaItem key={villa.id} {...villa} />
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default VillaList;
