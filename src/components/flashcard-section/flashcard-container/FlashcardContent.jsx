import styles from "./flashcardcontainer.module.css";

export default function FlashcardContent({ question, masteredLevel }) {
    return (
        <>
            <div className={styles["flashcardContent"]}>
                <span className={styles["categoryName"]}>Web Development</span>
                <div className={styles["questionContainer"]}>
                    <span className={styles["questionTitle"]}>{question}</span>
                    <p className={styles["revealAnswer"]}>
                        Click to reveal answer
                    </p>
                </div>
                <p className={styles["masteryLevel"]}>{masteredLevel}/5</p>
            </div>
        </>
    );
}
