import styles from "./statistics.module.css";

export default function StatisticCard() {
    return (
        <>
            <div className={styles["statisticsCard"]}>
                <div className={styles["statisticsText"]}>
                    <span>Total cards</span>
                    <span className={styles.cardNumber}>40</span>
                </div>
                <div className={styles.statisticsIconContainer}>
                    <img src="/images/icon-stats-total.svg" alt="" />
                </div>
            </div>
        </>
    );
}
