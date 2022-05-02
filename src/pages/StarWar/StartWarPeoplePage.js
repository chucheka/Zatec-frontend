import React from "react";
import useFetch from "../../helpers/useFetch";

import { GET_ALL_STARWAR_PEOPLE } from "../../helpers/endpoints";
import Loader from "../../components/Loader";
import { People } from "../../components/StarWar/People";

const StarWarPeoplePage = () => {
  const result = useFetch(GET_ALL_STARWAR_PEOPLE);
  const { loading, data, error } = result;

  if (loading == "yes") {
    return <Loader />;
  } else if (!error.length < 1) {
    return <h1>Something went wrong !!!</h1>;
  } else {
    if (data.success == true) {

      const { results } = data.data;

      console.log(results)

      return (
        <div className="list-people">
          {results.length < 0 ? (
            <h1>No Result Found</h1>
          ) : (
            <div className="peoples">
              <h1>Awesome Star War People </h1>
              <div>{results.map((people, index) => <People key= {index} people={people}/>)}</div>
            </div>
          )}
        </div>
      );
    }

    return <h1>{data.message}</h1>;
  }
};

export default StarWarPeoplePage;
