
import {Link,useParams} from 'react-router-dom';
import { useState,useEffect,useLocation} from 'react';
import ListItem from "./components/ListItem";
import axios from 'axios';

//import axios from 'axios';
//todo: if i don't have data load Home
//moment(moment('2020-11-18', 'YYYY-MM-DD')).format('DD-MM-YYYY');

function ListPage(){
    const params = useParams();
    //const { state } = props.location;
    //const { name, age } = state;
    /*useEffect(() => {
        // POST request using axios with error handling
        const article = { title: 'React POST Request Example' };
        axios.post('https://reqres.in/invalid-url', article)
            .then(response => this.setState({ articleId: response.data.id }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
            console.log(JSON.stringify(props))
        
    });
    <p>Name: {name}</p>
    <p>Age: {age}</p>*/

    return <>
    <h1>lista elementi da {params.dateFrom}</h1>
        <ListItem titolo="ciao" ammontare="salve"></ListItem>
        <ListItem titolo="buo" ammontare="ngiorno"></ListItem>
        <Link to="/">To Home</Link>
    </>;
}
export default ListPage;