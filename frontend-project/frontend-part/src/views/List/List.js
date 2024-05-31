import { Link, useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import ListItem from "./components/ListItem";
import axios from "axios";

//import axios from 'axios';
//todo: if i don't have data load Home
//moment(moment('2020-11-18', 'YYYY-MM-DD')).format('DD-MM-YYYY');

function ListPage() {

    const params =  useParams();
    // we need this for react 18 in dev mode to run once the request
    const count = useRef(0);
    useEffect(() => {
      if (count.current !== 0) {
        // code
        console.log("http request here");
      }
      count.current++;
    }, [])
  
  //const { state } = props.location;
  //const { name, age } = state;
  /*
    <p>Name: {name}</p>
    <p>Age: {age}</p>*/
        /*
        // POST request using axios with error handling
        const article = { title: 'React POST Request Example' };
        axios.post('https://reqres.in/invalid-url', article)
            .then(response => this.setState({ articleId: response.data.id }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
            console.log(JSON.stringify(props))
            */
        

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
