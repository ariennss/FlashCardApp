import styles from "./flashcardsection.module.css";
import StatisticsContainer from "../statistics-section/StatisticsContainer";
import FlashcardContainer from "./flashcard-container/FlashcardContainer";
import FlashcardHeader from "./flashcard-header/FlashcardHeader";
import NavigationControls from "./NavigationControls";

export default function FlashcardSection() {
    return (
        <section className={styles.flashcardPage}>
            <section className={styles["flashcardSection"]}>
                <div className={styles.prova}>
                    <FlashcardHeader />
                    <div>
                        <FlashcardContainer />
                        <NavigationControls />
                    </div>
                </div>
            </section>
            <StatisticsContainer />
        </section>
    );
}
