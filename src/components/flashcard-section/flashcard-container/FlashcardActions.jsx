import styles from "./flashcardcontainer.module.css";
import Button from "../../common/Button";

export default function FlashcardActions() {
    return (
        <section className={styles["actionsContainer"]}>
            <Button btnText={"I Know This"} />
            <Button btnText={"Reset Progress"} />
        </section>
    );
}
