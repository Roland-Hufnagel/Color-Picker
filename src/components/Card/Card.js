import "./Card.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Card(props) {
  console.log(props);
  return (
    <li
      onClick={() => {
        navigator.clipboard.writeText(props.hex);
      }}
      className="card"
      style={{ backgroundColor: `${props.hex}` }}
    >
      <button
        onClick={() => {
          props.onDeleteCard(props.id);
        }}
        className="close-button"
      >
        <FaRegTimesCircle />
      </button>
      <div className="grid-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("hallo", event.target.hexInput.value);
            props.onChange(props.id, event.target.hexInput.value);
          }}
        >
          <input
            pattern={"^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"}
            // onChange={(event) => {
            //   const prev = props.hex;
            //   console.log(event.target.value, prev);
            // }}
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
