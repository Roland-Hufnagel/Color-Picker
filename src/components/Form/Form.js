import "./Form.css";
import { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Form(props) {
  const [color, setColor] = useState("#aabbcc");
  const colorAPI = "https://www.thecolorapi.com/id?hex=";
console.log("props: " ,props);
  function handleChange(event) {
    setColor(event.target.value);
    console.log(event.target.value, "value");
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(color);
  }

  return (
  <div className="form-container" style={{ backgroundColor: color }}>
    <textarea 
    rows="3"
    className="header-input" 
    defaultValue={props.name}
    onBlur={(event)=>{props.onChangeName(props.id, event.target.value)}}
    ></textarea>
    <form
      action="#"
      className="form"
      onSubmit={handleSubmit}
      style={{ backgroundColor: color }}
    >
      
      {/* <input className="header-input" defaultValue={props.name} onChange={doSomething}></input> */}
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
    </div>
  );
}
