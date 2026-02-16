import styles from "./flashcardcontainer.module.css";
import FlashcardActions from "./FlashcardActions";
import FlashcardContent from "./FlashcardContent";

export default function FlashcardContainer() {
    return (
        <section className={styles["flashcardContainer"]}>
            <FlashcardContent />
            <FlashcardActions />
        </section>
    );
}
