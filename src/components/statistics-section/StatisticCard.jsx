import styles from "./statistics.module.css";

export default function StatisticCard({
    statisticName,
    howManyCards,
    iconPath,
}) {
    return (
        <>
            <div className={styles["statisticsCard"]}>
                <div className={styles["statisticsText"]}>
                    <span>{statisticName}</span>
                    <span className={styles.cardNumber}>{howManyCards}</span>
                </div>
                <div className={styles.statisticsIconContainer}>
                    <img src={iconPath} alt="" />
                </div>
            </div>
        </>
    );
}
