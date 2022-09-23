import Card from "../Card/Card.js";

export default function Cards(props){
    return(
        <ul className="card-container">
            {
            props.cards.map(card => {
                return <Card key={card.id} hex={card.colorCode} />
            })
            }
            
        </ul>
    )
}