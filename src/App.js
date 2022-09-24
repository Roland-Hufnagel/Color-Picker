import "./App.css";
import Cards from "./components/Cards/Cards.js";
import Form from "./components/Form/Form.js";
import { useState } from "react";
import {initialCards} from "./assets/db.js";



function App() {
  const [cards, setCards] = useState(initialCards ?? []);

  console.log(...cards);

  function updateCards(id, hex) {
    setCards(
      cards.map((card) => {
        return { ...card, colorCode: id === card.id ? hex : card.colorCode };
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
  
  function addCard(hex) {
    const newArray = cards.map((card) => {
      return card;
    });
    newArray.unshift({ id: Math.random(), colorCode: hex });
    setCards(newArray);
    console.log(newArray);
  }
 

  return (
    <>
      <h1>Color Saver</h1>
      <Form onAdd={addCard} />
      <Cards cards={cards} onChange={updateCards} onDeleteCard={deleteCard} />
    </>
  );
}

export default App;
