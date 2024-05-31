  
import {useState} from 'react';
import "../List.css"

export default function ListItem(props){
  const [titolo, setTitolo] = useState(props.titolo);
  let data = props.data; //props.data.toJSON().slice(0,10).replace(/-/g,'/');
  let ammontare = props.ammontare;
  const clickHandler = () => {
    setTitolo("Nuovo titolo!");
  }
  return (
    <div className="list-item">
        <div>{data}</div>
        <div className="list-item-description">
            <h2>{titolo}</h2>
        </div>
            <div className="list-item-price"> {ammontare} €</div>
            <button onClick={clickHandler} style={{marginLeft:10}}> Cambia titolo </button>
    </div>
  )  
}
