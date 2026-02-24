import styles from "./navigationcontrols.module.css";
import Button from "../common/Button";

export default function NavigationControls({ onNextClick, onPreviousClick }) {
    return (
        <section className={styles["navigationContainer"]}>
            <Button btnText={"Previous"} onClick={onPreviousClick} />
            <p className={styles["cardNumber"]}>Card of 40</p>
            <Button btnText={"Next"} onClick={onNextClick} />
        </section>
    );
}
