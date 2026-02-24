import styles from "./flashcardcontainer.module.css";
import FlashcardContent from "./FlashcardContent";
import Button from "../../common/Button";

export default function FlashcardContainer({
    currentCard,
    onResetStatus,
    onIKnowThis,
    showingAnswer,
    onShowAnswer,
}) {
    return (
        <section className={styles["flashcardContainer"]}>
            <FlashcardContent
                question={currentCard.question}
                masteredLevel={currentCard.knownCount}
                showingAnswer={showingAnswer}
                answer={currentCard.answer}
                onShowAnswer={onShowAnswer}
            />
            <section className={styles["actionsContainer"]}>
                <Button btnText={"I Know This"} onClick={onIKnowThis} />
                <Button btnText={"Reset Progress"} onClick={onResetStatus} />
            </section>
        </section>
    );
}
