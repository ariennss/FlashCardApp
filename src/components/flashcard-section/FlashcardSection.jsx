import styles from "./flashcardsection.module.css";
import StatisticsContainer from "../statistics-section/StatisticsContainer";
import FlashcardContainer from "./flashcard-container/FlashcardContainer";
import FlashcardHeader from "./flashcard-header/FlashcardHeader";
import NavigationControls from "./NavigationControls";
import { FlashcardContext } from "../../context/FlashcardContext";
import { useContext } from "react";
import { useState } from "react";

export default function FlashcardSection() {
    const cards = useContext(FlashcardContext);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    return (
        <section className={styles.flashcardPage}>
            <div className={styles.flashcardSection}>
                <div className={styles.prova}>
                    <FlashcardHeader />
                    <div>
                        <FlashcardContainer
                            currentCard={cards[currentCardIndex]}
                        />
                        <NavigationControls />
                    </div>
                </div>
            </div>
            <div className={styles.statisticsSection}>
                <StatisticsContainer />
            </div>
        </section>
    );
}
