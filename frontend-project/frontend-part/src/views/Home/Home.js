import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <h1>Subscription Viewer</h1>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="date"
            placeholder="Data di inizio"
            onChange={(event) => {
              setDateFrom(event.target.value);
            }}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="date"
            placeholder="Data di fine"
            onChange={(event) => {
              setDateTo(event.target.value);
            }}
          />
        </fieldset>

        {dateFrom && dateTo ? (
          <h3>
            <Link to={"/list/" + dateFrom + "/" + dateTo}>Vai alla lista</Link>
          </h3>
        ) : (
          <h3>Inserire le date desiderate</h3>
        )}
      </div>
    </nav>
  );
}

export default HomePage;
