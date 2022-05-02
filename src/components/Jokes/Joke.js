import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Joke(props) {
  const location = useLocation();

  let joke = location.state.joke == null ? props.joke : location.state.joke;

  let quote = location.state.center ? "joke-center" : "joke";

  console.log(joke);

  return (
    <div className={quote}>
      {quote == "joke" ? <span>{joke.value}</span> : <q>{joke.value}</q>}
    </div>
  );
}
