import styles from "./flashcardheader.module.css";

export default function CategoryFilter({
    categories,
    onChangeSelectedCategory,
}) {
    const options = categories.map((x) => {
        return (
            <option key={x} value={x}>
                {x}
            </option>
        );
    });

    return (
        <>
            <select
                name=""
                id=""
                onChange={(e) => {
                    onChangeSelectedCategory(e.target.value);
                }}
                className={styles["dropdown"]}
            >
                {options}
            </select>
            <div className={styles["checkboxContainer"]}>
                <input type="checkbox" id="hideMastered" name="hideMastered" />
                <label htmlFor="hideMastered">Hide Mastered</label>
            </div>
        </>
    );
}
