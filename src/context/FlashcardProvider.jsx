import data from "../data.json";
import { useReducer } from "react";
import { FlashcardContext } from "./FlashcardContext";

const initialState = {
    cards: data.flashcards,
    selectedCategory: "all",
};

function reducerFunction(state, action) {
    return state;
}

export default function FlashcardProvider({ children }) {
    const [cardsObject, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <FlashcardContext.Provider value={{ cardsObject, dispatch }}>
            {children}
        </FlashcardContext.Provider>
    );
}
