import "./App.css";
import Pallet from "./components/Pallet/Pallet.js";
import { useState } from "react";
import { SiAddthis } from "react-icons/si";

function App() {
  const initialPallets = ["pallet no.1", "pallet no.2", "pallet no.3"];
  const [pallets, setPallets] = useState(
     initialPallets
  );

  function changePalletName(name, value) {
    console.log("--->", name, "--", value);
    setPallets(
      pallets.map((pallet) => {
        return pallet === name ? value : pallet;
      })
    );
    localStorage.setItem("pallets", JSON.stringify(pallets));
  }
  console.log(pallets);
  return (
    <>
      <h1>
        Color Saver
        <SiAddthis className="add-icon" />
      </h1>

      {pallets.map((pallet, index) => {
        return (
          <Pallet
            key={pallet}
            name={pallet}
            id={index}
            onChangeName={changePalletName}
          />
        );
      })}
    </>
  );
}

export default App;
