import Card from "../Card/Card.js";
import Form from "../Form/Form.js";

export default function Cards(props) {
  return (
    <>
      <Form onAdd={props.onAdd} name={props.name}/>
      <ul className="card-container">
        {props.cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              hex={card.colorCode}
              name={card.name}
              onChange={props.onChange}
              onDeleteCard={props.onDeleteCard}
            />
          );
        })}
      </ul>
    </>
  );
}
