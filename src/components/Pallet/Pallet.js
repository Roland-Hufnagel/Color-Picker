import "./Pallet.css";
import Cards from "../Cards/Cards.js";
import { useEffect, useState } from "react";
import { initialCards } from "../../assets/db.js";

export default function Pallet(props) {
  const [cards, setCards] = useState(
     JSON.parse(localStorage.getItem(`Cards-${props.name}`)) ??
    initialCards
  );

  const API = "https://www.thecolorapi.com/id?hex=";

  useEffect(() => {
    localStorage.setItem(`Cards-${props.name}`, JSON.stringify(cards));
  }, [cards]);


  async function getColorName(hex) {
    try {
      const response = await fetch(API + hex.substring(1));
      const result = await response.json();
      const newName = result.name.value;
      return newName;
    } catch (error) {
      console.log(error.message);
      return "No Name available";
    }
  }

  async function updateCards(id, hex) {
    const newName = await getColorName(hex);
    setCards(
      cards.map((card) => {
        return {
          ...card,
          colorCode: id === card.id ? hex : card.colorCode,
          name: id === card.id ? newName : card.name,
        };
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

  async function addCard(hex) {
    const newName = await getColorName(hex);
    const newArray = cards.map((card) => {
      return card;
    });
    newArray.unshift({ id: Math.random(), colorCode: hex, name: newName });
    setCards(newArray);
  }

  return (
    <>
       <h1>{props.name}</h1>
      <Cards
        cards={cards}
        onChange={updateCards}
        onDeleteCard={deleteCard}
        onAdd={addCard}
        name={props.name}
      />
    </>
  );
}