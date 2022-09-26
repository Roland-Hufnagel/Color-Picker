import "./App.css";
import Cardspallet from "./components/Cards/Cardspallet.js";
import { useState, useEffect } from "react";
import { SiAddthis } from "react-icons/si";
import { initialPallets } from "./assets/db.js";

function App() {

  const [pallets, setPallets] = useState(
    JSON.parse(localStorage.getItem("pallets")) ?? initialPallets ?? []
  );

  function changePalletName(id, newName) {
    setPallets(
      pallets.map((pallet) => {
        return id === pallet.id
          ? { id: pallet.id, name: newName }
          : {...pallet}
      })
    );
  }

  useEffect(() => {
    localStorage.setItem(`pallets`, JSON.stringify(pallets));
  }, [pallets]);

  return (
    <>
      <h1>
        Color Saver
        <SiAddthis className="add-icon" />
      </h1>
      {pallets.map((pallet, index) => {
        return (
          <Cardspallet
            key={pallet.id}
            name={pallet.name}
            id={pallet.id}
            onChangeName={changePalletName}
          />
        );
      })}
    </>
  );
}

export default App;
