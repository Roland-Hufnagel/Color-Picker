import "./App.css";
import Cards from "./components/Cards/Cards.js";
import { useState } from "react";

const initialCards = [
  {
    id: 1,
    colorCode: "#ccc",
  },
  {
    id: 2,
    colorCode: "#f36ef5",
  },
  {
    id: 3,
    colorCode: "#82c91e",
  },
  {
    id: 4,
    colorCode: "#12b886",
  },
  {
    id: 5,
    colorCode: "#345e43",
  },
  {
    id: 6,
    colorCode: "#4c6ef5",
  },
  {
    id: 7,
    colorCode: "#ccc333",
  },
  {
    id: 8,
    colorCode: "#987643",
  },
];

function App() {
  const [cards, setCards] = useState(initialCards ?? []);

  function updateCards(id, hex) {
    setCards(
      cards.map((card) => {
        console.log(id, card.id, hex, id === card.id);
        if (id === card.id) {
          return { id: card.id, colorCode: hex };
        } else {
          return card;
        }
      })
    );
  }
  function deleteCard(id) {
    setCards(
      cards.filter((card) => {
        console.log(id, card.id, id === card.id);
        return id !== card.id;
      })
    );
  }

  return (
    <>
      <h1>Color Saver</h1>
      <Cards cards={cards} onChange={updateCards} onDeleteCard={deleteCard} />
    </>
  );
}

export default App;
