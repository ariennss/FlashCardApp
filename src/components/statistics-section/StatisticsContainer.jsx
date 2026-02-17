import styles from "./statistics.module.css";
import StatisticCard from "./StatisticCard";

export default function StatisticsContainer() {
    return (
        <section className={styles["statisticsContainer"]}>
            <h2 className={styles["statisticsTitle"]}>Study Statistics</h2>
            <div className={styles["statisticsCardsContainer"]}>
                <StatisticCard />
                <StatisticCard />
                <StatisticCard />
                <StatisticCard />
            </div>
        </section>
    );
}
