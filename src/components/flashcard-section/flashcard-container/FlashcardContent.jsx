import styles from "./flashcardcontainer.module.css";

export default function FlashcardContent({
    question,
    answer,
    masteredLevel,
    showingAnswer,
    onShowAnswer,
}) {
    let divToShow; // dynamic on the basis of showing answer or question

    if (showingAnswer) {
        divToShow = (
            <div className={styles["flashcardContentAnswer"]}>
                <span className={styles["categoryName"]}>Web Development</span>
                <div
                    className={styles["questionContainer"]}
                    onClick={onShowAnswer}
                >
                    <span className={styles["questionTitle"]}>{answer}</span>
                    <p className={styles["revealAnswer"]}>
                        Click to show question
                    </p>
                </div>
                <p className={styles["masteryLevel"]}>{masteredLevel}/5</p>
            </div>
        );
    } else {
        divToShow = (
            <div className={styles["flashcardContentQuestion"]}>
                <span className={styles["categoryName"]}>Web Development</span>
                <div
                    className={styles["questionContainer"]}
                    onClick={onShowAnswer}
                >
                    <span className={styles["questionTitle"]}>{question}</span>
                    <p className={styles["revealAnswer"]}>
                        Click to reveal answer
                    </p>
                </div>
                <p className={styles["masteryLevel"]}>{masteredLevel}/5</p>
            </div>
        );
    }

    return <>{divToShow}</>;
}
