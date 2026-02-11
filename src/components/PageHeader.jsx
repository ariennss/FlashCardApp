import styles from "./pageheader.module.css";
import Button from "./common/Button";

export default function PageHeader() {
    return (
        <header className={styles.headerContainer}>
            <img src="/images/logo-small.svg" alt="" />
            <div className={styles.pageToggler}>
                <Button btnText={"Study Mode"} />
                <Button btnText={"All Cards"} />
            </div>
        </header>
    );
}
