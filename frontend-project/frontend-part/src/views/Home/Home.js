
import {useState} from 'react';
import {Link} from 'react-router-dom';

function HomePage(){
    const [datefrom, setdatefrom] = useState(null);
    const [dateto, setdateto] = useState(null);
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

        {
          (datefrom&&dateto)?
            <Link to={"/list/"+datefrom+"/"+dateto} >Vai alla lista</Link>
            :
            <h3>Inserire le date desiderate</h3>
        }
   
    </>;
}

export default HomePage;

