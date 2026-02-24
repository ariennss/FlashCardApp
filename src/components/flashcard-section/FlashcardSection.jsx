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
    const cards = cardsObject.cards; // da filtrare per selectedCategory
    const currentCard = cards[currentCardIndex];

    function onShuffle() {
        dispatch({ type: "shuffle" });
        setCurrentCardIndex(0);
    }

    function onResetStatus() {
        dispatch({ type: "resetStatus", cardId: currentCard.id });
    }

    function onIKnowThis() {
        dispatch({ type: "iKnowThis", cardId: currentCard.id });
    }

    function onNextClick() {
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        }
    }

    function onPreviousClick() {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
    }

    return (
        <section className={styles.flashcardPage}>
            <div className={styles.flashcardSection}>
                <div className={styles.prova}>
                    <FlashcardHeader onShuffle={onShuffle} />
                    <div>
                        <FlashcardContainer
                            currentCard={currentCard}
                            onResetStatus={onResetStatus}
                            onIKnowThis={onIKnowThis}
                        />
                        <NavigationControls
                            onNextClick={onNextClick}
                            onPreviousClick={onPreviousClick}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.statisticsSection}>
                <StatisticsContainer cards={cards} />
            </div>
        </section>
    );
}
