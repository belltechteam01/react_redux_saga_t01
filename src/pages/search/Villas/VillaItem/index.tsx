import React from "react";
import { IVillaType } from "../../../../store/search_module/types";
import styles from "./VillaItem.module.scss";
import addressMarkIcon from "../../../../assets/icons/addressMark.svg";

const VillaItem = (props: IVillaType) => {
    const { img, title, address, slappkamers, badkamers, price } = props;

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.itemImage}>
                <img src={img} alt={img} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.address}>
                    <img src={addressMarkIcon} alt="addrssIcon" />
                    <span>{address}</span>
                </div>
                <div className={styles.details}>
                    {slappkamers} Slappkamers<span>•</span>
                    {badkamers} Badkamers
                </div>
                <div className={styles.price}>€ {price.toFixed(3)}</div>
            </div>
        </div>
    );
};

export default VillaItem;
