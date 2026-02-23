import styles from "./flashcardcontainer.module.css";
import FlashcardContent from "./FlashcardContent";
import Button from "../../common/Button";

export default function FlashcardContainer({ currentCard }) {
    return (
        <section className={styles["flashcardContainer"]}>
            <FlashcardContent question={currentCard.question} />
            <section className={styles["actionsContainer"]}>
                <Button btnText={"I Know This"} />
                <Button btnText={"Reset Progress"} />
            </section>
        </section>
    );
}
