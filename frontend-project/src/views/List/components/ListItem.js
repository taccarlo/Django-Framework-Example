  
import "../List.css"

export default function ListItem(props){
  return (
    <div className="list-item">
      <div>{props.number}</div>
        <div className="list-item-description">
            <h2><b>{props.id}</b> {props.title}</h2>
        </div>
        <div className="list-item-price">Subscriptions: {props.data}</div>
            <div className="list-item-price"> Total revenue: {parseFloat(props.price).toFixed(2)} €</div>
    </div>
  )  
}
