import CategoryFilter from "./CategoryFilter";
import Button from "./Button";

export default function FlashcardHeader() {
  return (
    <>
      <CategoryFilter />
      <Button btnText={"Shuffle"} hasIcon={true} />
    </>
  );
}
