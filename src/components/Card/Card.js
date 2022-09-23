import "./Card.css";

export default function Card(props) {
  return (
    <li
      onClick={() => {
        navigator.clipboard.writeText(props.hex);
      }}
      className="card"
      style={{ backgroundColor: `${props.hex}` }}
    >
      <div className="grid-container">
        <input
          className="color-code"
          type="text"
          name="xyz"
          Value={props.hex}
        ></input>
      </div>
    </li>
  );
}
