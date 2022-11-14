import "./Card.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Card(props) { // id, name, hex, onChange, onDeleteCard
  //console.log(props.name);
  return (
    <li
      onClick={() => {
        navigator.clipboard.writeText(props.hex);
      }}
      className="card"
      style={{ backgroundColor: `${props.hex}` }}
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          props.onDeleteCard(props.id);
        }}
        className="close-button"
      >
        <FaRegTimesCircle className="close-icon" />
      </button>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onChange(props.id, event.target.hexInput.value);
          }}
        >
          <input
            onClick={(event) => {
              event.stopPropagation();
            }}
            onInput={(event)=>{
              props.onChange(props.id, event.target.value)
            }}
            pattern={"^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"}
            className="color-input"
            type="text"
            name="hexInput"
            value={props.hex}
          ></input>
        </form>
        <p className="color-name">{props.name}</p>
    </li>
  );
}
