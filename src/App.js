import "./App.css";
import Pallet from "./components/Pallet/Pallet.js";
import { useState } from "react";

function App() {
  const initialPallets = ["pallet no.1", 'pallet no.2', 'pallet no.3'];
  const [pallets, setPallets] = useState(initialPallets);

  return (
    <>
    {
      pallets.map(pallet=>{
        return <Pallet key={pallet} name={pallet}/>
      })
    }
    </>
  )
}

export default App;
