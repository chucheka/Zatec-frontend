import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../helpers/useFetch";
import { GET_ALL_JOKES_CATEGORIES } from "../../helpers/endpoints";
import Category from "../../components/Jokes/Category";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { SAERCH_JOKE_BY_CATEGORY } from "../../helpers/endpoints";

const JokeCategoryPage = () => {
  const result = useFetch(GET_ALL_JOKES_CATEGORIES);

  const navigate = useNavigate();

  const { loading, data, error } = result;

  function handleNavigateToJokes(category, e) {
    fetch(SAERCH_JOKE_BY_CATEGORY + `?category=${category}`)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        navigate("/jokes/joke", { state: { joke: json.data, center: true } });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading == "yes") {
    return <Loader />;
  } else if (!error.length < 1) {
    return <h1>Something went wrong !!!</h1>;
  } else {
    if (data.success == true) {
      return (
        <div className="box">
          <h2>Joke Categories</h2>
          <p>Click to get a random joke based on category</p>
          <ul className="categories">
            {data.data.map((category, index) => (
              <li
                key={index}
                onClick={(e) => handleNavigateToJokes(category, e)}
              >
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <h1>{data.message}</h1>;
  }
};

export default JokeCategoryPage;
