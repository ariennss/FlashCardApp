import styles from "./flashcardcontainer.module.css";

export default function FlashcardContent() {
    return (
        <>
            <div className={styles["flashcardContent"]}>
                <span className={styles["categoryName"]}>Web Development</span>
                <h1>What does HTML stand for?</h1>
                <p>Click to reveal answer</p>
                <p>0/5</p>
            </div>
        </>
    );
}
