import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ListItem from "./components/ListItem";
import useDataFetch from "../../requests/useDataFetch";

function ListPage() {
  const params = useParams();
  const { data, error, isLoading, refresh } = useDataFetch(
    "http://127.0.0.1:8000/subscription/",
    params.dateFrom,
    params.dateTo
  );

  if (isLoading) {
    return (
      <nav className="navbar navbar-light">
        <div className="container center" >
          <h3>Loading... </h3>
        </div>
      </nav>
    );
  }
  if (error) {
    return (
      <nav className="navbar navbar-light">
        <div className="container center">
          <h3>Error: {error.message}</h3>
          <button onClick={refresh} className="btn btn-sm btn-primary">Retry</button>
        </div>
      </nav>
    );
  }
  console.log(JSON.stringify(data));
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        {params.dateFrom && params.dateTo ? (
          <>
            <h1 className="center">
              {params.dateFrom} ▶ {params.dateTo}
            </h1>
            {data &&
              data.map((item, i) => (
                <ListItem
                  key={i}
                  id={item.ID_prod}
                  title={item.prod_desc}
                  data={item.number}
                  price={item.revenue}
                />
              ))}
          </>
        ) : (
          <h3 className="center">No dates selected</h3>
        )}
        <h3>
          <Link to="/">Go back</Link>
        </h3>
      </div>
    </nav>
  );
}
export default ListPage;
