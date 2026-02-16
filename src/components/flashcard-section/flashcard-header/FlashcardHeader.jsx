import styles from "./flashcardheader.module.css";
import CategoryFilter from "./CategoryFilter";
import Button from "../../common/Button";

export default function FlashcardHeader() {
    return (
        <section className={styles["headerContainer"]}>
            <div className={styles["dropdownContainer"]}>
                <CategoryFilter />
            </div>
            <Button btnText={"Shuffle"} />
        </section>
    );
}
