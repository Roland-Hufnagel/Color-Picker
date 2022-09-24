import "./Card.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Card(props) {
    
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
      <div className="grid-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onChange(props.id, event.target.hexInput.value);
          }}
        
        >
          <input
            onClick={(event => {
                event.stopPropagation();
            })}
            pattern={"^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"}
            className="color-code"
            type="text"
            name="hexInput"
            defaultValue={props.hex}
          ></input>
        </form>
      </div>
    </li>
  );
}
