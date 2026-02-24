import styles from "./flashcardheader.module.css";
import CategoryFilter from "./CategoryFilter";
import Button from "../../common/Button";

export default function FlashcardHeader({
    onShuffle,
    categories,
    onChangeSelectedCategory,
}) {
    return (
        <section className={styles["headerContainer"]}>
            <div className={styles["dropdownContainer"]}>
                <CategoryFilter
                    categories={categories}
                    onChangeSelectedCategory={onChangeSelectedCategory}
                />
            </div>
            <Button btnText={"Shuffle"} onClick={onShuffle} />
        </section>
    );
}
