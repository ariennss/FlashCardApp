import styles from "./navigationcontrols.module.css";
import Button from "../common/Button";

export default function NavigationControls() {
    return (
        <section className={styles["navigationContainer"]}>
            <Button btnText={"Previous"} />
            <p className={styles["cardNumber"]}>Card of 40</p>
            <Button btnText={"Next"} />
        </section>
    );
}
