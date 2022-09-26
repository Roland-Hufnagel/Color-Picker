import Card from "../Card/Card.js";
import Form from "../Form/Form.js";
import { useState, useEffect } from "react";
import { initialCards } from "../../assets/db.js";

export default function Cardspallet(props) {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem(`Cards-${props.id}`)) ?? initialCards
  );
  const API = "https://www.thecolorapi.com/id?hex=";

  useEffect(() => {
    localStorage.setItem(`Cards-${props.id}`, JSON.stringify(cards));
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
    console.log("in UpdateCards", id, hex);
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
    newArray.unshift({
      id: Math.random().toString(),
      colorCode: hex,
      name: newName,
    });
    setCards(newArray);
  }

  return (
    <>
      {" "}
      <hr />
      <h2>{props.name}</h2>
      <Form
        id={props.id}
        onAdd={addCard}
        name={props.name}
        onChangeName={props.onChangeName}
      />
      <ul className="card-container">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              hex={card.colorCode}
              name={card.name}
              id={card.id}
              onChange={updateCards}
              onDeleteCard={deleteCard}
            />
          );
        })}
      </ul>
    </>
  );
}
