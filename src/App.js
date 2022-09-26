import "./App.css";
import Cardspallet from "./components/Cards/Cardspallet.js";
import { useState, useEffect } from "react";
import { SiAddthis } from "react-icons/si";

function App() {
  const initialPallets = [
    { id: "1", name: "pallet no.1" },
    { id: "2", name: "pallet no.2" },
    { id: "3", name: "pallet no.3" },
  ];
  const [pallets, setPallets] = useState(
    JSON.parse(localStorage.getItem("pallets")) ?? initialPallets
  );

  function changePalletName(id, name) {
    console.log("--->", id, "--", name);
    setPallets(
      pallets.map((pallet) => {
        return id === pallet.id
          ? { id: pallet.id, name: name }
          : { id: pallet.id, name: pallet.name };
      })
    );
  }
  console.log("----", pallets);

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
