import "./Form.css";
import { useEffect, useState } from "react";

export default function Form(props) {
  const [color, setColor] = useState("#ccc");
  const colorAPI = "https://www.thecolorapi.com/id?hex=";

  function handleChange(event) {
    setColor(event.target.value);
    console.log(event.target.value, "value");
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(color);
  }
  

  return (
    <form
      action="#"
      className="form"
      onSubmit={handleSubmit}
      style={{ backgroundColor: color }}
    >
      <h2>Bonbon Style</h2>
      <label htmlFor="input-color"></label>
      <input
        onChange={handleChange}
        type="color"
        className="input-color"
        id="input-color"
        value={color}
      />
      <label htmlFor="input-hex"></label>
      <input
        pattern={"^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"}
        onChange={handleChange}
        type="text"
        className="input-hex"
        id="input-hex"
        value={color}
      />
      <button type="submit">Add</button>
    </form>
  );
}
