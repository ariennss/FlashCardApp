import "./App.css";
import styles from "./app.module.css";
import PageHeader from "./components/PageHeader";
import FlashcardSection from "./components/flashcard-section/FlashcardSection";
import FlashcardProvider from "./context/FlashcardProvider";
import data from "/src/data.json";

console.log("Dati: " + data.flashcards);
function App() {
    //add a state to toggle between the flashcard section and the editing section

    return (
        <section className={styles["mainContainer"]}>
            <FlashcardProvider>
                <PageHeader />
                <FlashcardSection />
            </FlashcardProvider>
        </section>
    );
}

export default App;
