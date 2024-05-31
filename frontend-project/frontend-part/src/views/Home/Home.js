
import {useState} from 'react';
import {Link} from 'react-router-dom';

function HomePage(){
    const [datefrom, setdatefrom] = useState(null);
    const [dateto, setdateto] = useState(null);
    const dataToPass = { name: 'John Doe', age: 25 };
    return <>
        <div>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="date"
                      placeholder="Data di inizio"
                      onChange={
                        (event) => {
                            setdatefrom(event.target.value);
                        }
                      }
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="date"
                      placeholder="Data di fine"
                      onChange={
                        (event) => {
                            setdateto(event.target.value);
                        }
                      }
                    />
                  </fieldset>
        </div>


        {!(datefrom&&dateto) &&
            <h3>Inserire le date desiderate</h3>
        } 
        <Link to = { {
            pathname: "/list",
            myCustomProps: "ciao"
        }}>
          qui
        </Link>
        
        <Link to={{ pathname: '/list', state: dataToPass }}>Go to Other Component</Link>
 
       <div>     <Link to="/list" >simple link</Link></div>
   
    </>;
}

export default HomePage;



/*
        {(datefrom&&dateto) &&
        <Link to={{pathname:"/list", state:{datefrom:datefrom,dateto:dateto}}}><h3>Vai alla lista</h3></Link>
        }
        <Link to="/list" state={{myObj: "ciao"}}>qui</Link>
*/
