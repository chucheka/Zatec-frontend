import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { SEARCH_CHUCKS_AND_SWAPI_APIs } from "../helpers/endpoints";
import useFetch from "../helpers/useFetch";
import Joke from "../components/Jokes/Joke";
import { People } from "../components/StarWar/People";

export default function SearchPage() {

  const location = useLocation();

  const navigate = useNavigate();

  const result = useFetch(`${SEARCH_CHUCKS_AND_SWAPI_APIs}=${location.state.query}`);

  const { loading, data, error } = result;

  console.log(data);

  if (loading == "yes") {
    return <Loader />;
  } else if (!error.length < 1) {
    return <h1>Something went wrong !!!</h1>;
  } else {
    if (data.success == true) {
      return (
        <div className="search-list">

          <h1>Search Results for {location.state.query}</h1>
          <button className="back-button" onClick={(e)=>navigate("/")}>&#60;&#60;</button>
          {data.data.length < 0 ? (<h1>No Result Found</h1>) : (
            
            data.data.map((searchResult, index) => {

              const { records, metaData } = searchResult;

              if (metaData.apiType == "CHUCKNORRIS") {
                if (records != null && records.length > 0)

                return(
                  <div className="search-list-items">
                    <h3>Awesome Jokes</h3>
                    {records.map((joke) => <Joke key={joke.id} joke={joke}/>)}
                  </div>
                )
                
              }

              if (metaData.apiType == "SWAPI") {
                if (records != null && records.length > 0)

                return(
                  <div className="search-list-items">
                    <h3>Star War People</h3>
                    {records.map((people) => <People people={people} />)}
                  </div>
                )
              }
            })
          )}
        </div>
      );
    }

    return <h1>{data.message}</h1>;
  }
}
