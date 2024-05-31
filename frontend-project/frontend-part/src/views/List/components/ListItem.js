  
import {useState} from 'react';
import "../List.css"

export default function ListItem(props){
  let titolo = props.titolo;
  let data = props.data;
  let ammontare = props.ammontare;
  return (
    <div className="list-item">
        <div>{data}</div>
        <div className="list-item-description">
            <h2>{titolo}</h2>
        </div>
            <div className="list-item-price"> {ammontare} €</div>
    </div>
  )  
}
