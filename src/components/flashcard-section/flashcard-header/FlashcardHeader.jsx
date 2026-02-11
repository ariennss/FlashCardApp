import CategoryFilter from "./CategoryFilter";
import Button from "../../common/Button";

export default function FlashcardHeader() {
    return (
        <>
            <CategoryFilter />
            <Button btnText={"Shuffle"} />
        </>
    );
}
