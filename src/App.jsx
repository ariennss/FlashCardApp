import "./App.css";
import styles from "./app.module.css";
import PageHeader from "./components/PageHeader";
import FlashcardSection from "./components/flashcard-section/FlashcardSection";

function App() {
    return (
        <section className={styles["mainContainer"]}>
            <PageHeader />
            <FlashcardSection />
        </section>
    );
}

export default App;
