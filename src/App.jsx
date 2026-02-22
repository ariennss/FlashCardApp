import "./App.css";
import styles from "./app.module.css";
import PageHeader from "./components/PageHeader";
import FlashcardSection from "./components/flashcard-section/FlashcardSection";
import { FlashcardContext } from "./context/FlashcardContext";
import data from "/src/data.json";

console.log("Dati: " + data.flashcards);
function App() {
    return (
        <section className={styles["mainContainer"]}>
            <FlashcardContext.Provider value={data.flashcards}>
                <PageHeader />
                <FlashcardSection />
            </FlashcardContext.Provider>
        </section>
    );
}

export default App;
