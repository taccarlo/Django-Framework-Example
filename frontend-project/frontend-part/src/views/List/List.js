import { Link, useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import ListItem from "./components/ListItem";
import axios from "axios";

function ListPage() {

    const params =  useParams();
    // we need this from react 18 in dev mode to run once the request
    const count = useRef(0);
    useEffect(() => {
      if (count.current !== 0) {
        
        axios.post('http://127.0.0.1:8000/subscription/', {
            from: params.dateFrom,
            to: params.dateTo
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });

      }
      count.current++;
    },[params.dateFrom,params.dateTo])
  
  return (
    
    <nav className="navbar navbar-light">
      <div className="container">
    {(params.dateFrom && params.dateTo) ? 
        <>
            <h1>
            {params.dateFrom} ▶ {params.dateTo}
            </h1>
            <ListItem titolo="ciao" ammontare="salve"></ListItem>
            <ListItem titolo="buo" ammontare="ngiorno"></ListItem>
        </>
    :
        <h3>No dates selected</h3>

    }
    <h3><Link to="/">Go back</Link></h3>
    </div>
  </nav>
  );
}
export default ListPage;
