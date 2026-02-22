import styles from "./statistics.module.css";
import StatisticCard from "./StatisticCard";
import { FlashcardContext } from "../../context/FlashcardContext";
import { useContext } from "react";

export default function StatisticsContainer() {
    const cards = useContext(FlashcardContext);
    let totalCards = cards.length;
    let mastered = cards.filter((x) => x.knownCount === 5).length;
    let inProgress = cards.filter(
        (x) => x.knownCount > 0 && x.knownCount < 5,
    ).length;
    let notStarted = cards.filter((x) => x.knownCount == 0).length;

    return (
        <section className={styles["statisticsContainer"]}>
            <h2 className={styles["statisticsTitle"]}>Study Statistics</h2>
            <div className={styles["statisticsCardsContainer"]}>
                <StatisticCard
                    statisticName={"Total Cards"}
                    howManyCards={totalCards}
                    iconPath={"/images/icon-stats-total.svg"}
                />
                <StatisticCard
                    statisticName={"Mastered"}
                    howManyCards={mastered}
                    iconPath={"/images/icon-stats-total.svg"}
                />
                <StatisticCard
                    statisticName={"In Progress"}
                    howManyCards={inProgress}
                    iconPath={"/images/icon-stats-total.svg"}
                />
                <StatisticCard
                    statisticName={"Not Started"}
                    howManyCards={notStarted}
                    iconPath={"/images/icon-stats-total.svg"}
                />
            </div>
        </section>
    );
}
