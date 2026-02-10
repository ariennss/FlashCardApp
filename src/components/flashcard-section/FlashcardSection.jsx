import StatisticsContainer from "../statistics-section/StatisticsContainer";
import FlashcardContainer from "./flashcard-container/FlashcardContainer";
import FlashcardHeader from "./flashcard-header/FlashcardHeader";
import NavigationControls from "./NavigationControls";

export default function FlashcardSection() {
  return (
    <>
      <div>
        <FlashcardHeader />
        <hr />
        <FlashcardContainer />
        <hr />
        <NavigationControls />
      </div>

      <div>
        <StatisticsContainer />
      </div>
    </>
  );
}
