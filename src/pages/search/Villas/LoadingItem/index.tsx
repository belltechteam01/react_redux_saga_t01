import styles from "./LoadingItem.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingItem = () => {
    return (
        <div className={styles.wrapper}>
            <Skeleton
                className={styles.loading}
                duration={2}
                width={260}
                height={160}
            />

            <div className={styles.content}>
                <Skeleton
                    className={styles.loading}
                    duration={2}
                    width={360}
                    height={24}
                />
                <Skeleton
                    className={styles.loading}
                    duration={2}
                    width={200}
                    height={21}
                />
                <Skeleton
                    className={styles.loading}
                    duration={2}
                    width={200}
                    height={21}
                />
            </div>
        </div>
    );
};

export default LoadingItem;
