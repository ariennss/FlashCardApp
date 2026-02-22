import styles from "./flashcardcontainer.module.css";
import FlashcardActions from "./FlashcardActions";
import FlashcardContent from "./FlashcardContent";

export default function FlashcardContainer({ currentCard }) {
    function onKnowThis() {}

    function onResetProgress() {}

    return (
        <section className={styles["flashcardContainer"]}>
            <FlashcardContent question={currentCard.question} />
            <FlashcardActions />
        </section>
    );
}
