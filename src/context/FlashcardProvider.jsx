import data from "../data.json";
import { useReducer } from "react";
import { FlashcardContext } from "./FlashcardContext";

const initialState = {
    cards: data.flashcards,
    selectedCategory: "all",
};

export default function FlashcardProvider({ children }) {
    const [cardsObject, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <FlashcardContext.Provider value={{ cardsObject, dispatch }}>
            {children}
        </FlashcardContext.Provider>
    );
}

function reducerFunction(state, action) {
    switch (action.type) {
        case "shuffle": {
            const orderedCards = [...state.cards];
            const shuffledCards = shuffle(orderedCards);
            return { ...state, cards: shuffledCards }; // We update the whole lsit.
        }
        case "resetStatus": {
            // we update a single card
            const updatedCards = state.cards.map((card) => {
                if (card.id === action.cardId) {
                    return { ...card, knownCount: 0 };
                } else {
                    return card;
                }
            });

            return { ...state, cards: updatedCards };
        }
        case "iKnowThis": {
            // We update a single card
            const updatedCards = state.cards.map((card) => {
                if (card.id === action.cardId) {
                    if (card.knownCount < 5) {
                        return { ...card, knownCount: card.knownCount + 1 };
                    } else {
                        return card;
                    }
                } else {
                    return card;
                }
            });

            return { ...state, cards: updatedCards };
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
