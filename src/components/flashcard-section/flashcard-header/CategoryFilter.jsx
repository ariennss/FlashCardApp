import styles from "./flashcardheader.module.css";

export default function CategoryFilter() {
    return (
        <>
            <select name="" id="" className={styles["dropdown"]}>
                <option value="art">All Categories</option>
            </select>

            <div className={styles["checkboxContainer"]}>
                <input type="checkbox" id="hideMastered" name="hideMastered" />
                <label htmlFor="hideMastered">Hide Mastered</label>
            </div>
        </>
    );
}
