import styles from "./flashcardsection.module.css";
import StatisticsContainer from "../statistics-section/StatisticsContainer";
import FlashcardContainer from "./flashcard-container/FlashcardContainer";
import FlashcardHeader from "./flashcard-header/FlashcardHeader";
import NavigationControls from "./NavigationControls";
import { useContext } from "react";
import { FlashcardContext } from "../../context/FlashcardContext";
import { useState } from "react";

export default function FlashcardSection() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const { cardsObject, dispatch } = useContext(FlashcardContext);
    const cards = cardsObject.cards;
    const currentCard = cards[currentCardIndex];

    return (
        <section className={styles.flashcardPage}>
            <div className={styles.flashcardSection}>
                <div className={styles.prova}>
                    <FlashcardHeader />
                    <div>
                        <FlashcardContainer currentCard={currentCard} />
                        <NavigationControls />
                    </div>
                </div>
            </div>
            <div className={styles.statisticsSection}>
                <StatisticsContainer cards={cards} />
            </div>
        </section>
    );
}
