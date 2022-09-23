import './App.css';
import Cards from "./components/Cards/Cards.js";
import {useState} from "react";

const initialCards = [
  {
    id: 1,
    colorCode: "#ccc",
  },
  {
    id: 2,
    colorCode: "#4c6ef5",
  },
  {
    id: 3,
    colorCode: "#82c91e",
  },
  {
    id: 4,
    colorCode: "#12b886",
  },
];


function App() {
  const [cards, setCards] = useState(initialCards)

  return (
    <>
      <h1>Color Saver</h1>
      <Cards cards={cards}/>
    </>
  );
}

export default App;
