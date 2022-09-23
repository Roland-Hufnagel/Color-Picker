import Card from "../Card/Card.js";

export default function Cards(props){
    return(
        <ul className="card-container">
            {
            props.cards.map(card => {
                return <Card key={card.id} id={card.id} hex={card.colorCode} onChange={props.onChange} onDeleteCard={props.onDeleteCard}/>
            })
            }
            
        </ul>
    )
}