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
    const [showingAnswer, setShowAnswer] = useState(false);

    const { cardsObject, dispatch } = useContext(FlashcardContext);
    const [selectedCategory, setSelectedCategory] = useState(
        cardsObject.selectedCategory,
    );
    const cards = cardsObject.cards.filter((card) => {
        return selectedCategory === "all" || card.category === selectedCategory;
    });
    const currentCard = cards[currentCardIndex];
    const allCards = cardsObject.cards;
    const allCategories = allCards.map((x) => x.category);
    const distinctCategoriesSet = new Set(allCategories);
    const distinctCategories = ["all", ...distinctCategoriesSet];

    function onChangeSelectedCategory(category) {
        setSelectedCategory(category);
        setCurrentCardIndex(0);
    }

    function onShuffle() {
        dispatch({ type: "shuffle" });
        setCurrentCardIndex(0);
        setShowAnswer(false);
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
        setShowAnswer(false);
    }

    function onPreviousClick() {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
        setShowAnswer(false);
    }

    function showAnswer() {
        setShowAnswer(!showingAnswer);
    }

    return (
        <section className={styles.flashcardPage}>
            <div className={styles.flashcardSection}>
                <div className={styles.prova}>
                    <FlashcardHeader
                        onShuffle={onShuffle}
                        categories={distinctCategories}
                        onChangeSelectedCategory={onChangeSelectedCategory}
                    />
                    <div>
                        <FlashcardContainer
                            currentCard={currentCard}
                            onResetStatus={onResetStatus}
                            onIKnowThis={onIKnowThis}
                            showingAnswer={showingAnswer}
                            onShowAnswer={showAnswer}
                        />
                        <NavigationControls
                            onNextClick={onNextClick}
                            onPreviousClick={onPreviousClick}
                            cardIndex={currentCardIndex}
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
