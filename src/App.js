import "./App.css";
import Pallet from "./components/Pallet/Pallet.js";
//import Cards from "./components/Cards/Cards.js";
import { useState } from "react";
//import { initialCards } from "./assets/db.js";

function App() {
  const initialPallets = ["pallet no.1", 'pallet no.2', 'pallet no.3'];
  console.log(initialPallets);
  const [pallets, setPallets] = useState(initialPallets);
  console.log(pallets);

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
