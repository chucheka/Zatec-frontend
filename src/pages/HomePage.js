import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (query, e) => {
    e.preventDefault();
    navigate("/search", { state: { query } });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleNavigate = (path,e)=>{
    navigate(`${path}`)
  }

  console.log(process.env.NODE_ENV)
  return (
    <div className="main">
      <div className="welcome"> WELCOME TO YOUR AWESOME ZATEC APP</div>

      <form onSubmit={(e) => handleSubmit(query, e)}>
        <input
          type="search"
          placeholder="Search joke, people"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="links">
        <div className="categories-link" onClick={(e)=>handleNavigate("/jokes/categories",e)}>
          <Link to="/jokes/categories">CHUCK NORRIS JOKES CATEGORIES</Link>
        </div>
        <div className="people-link" onClick={(e)=>handleNavigate("/starwar/people",e)}>
          <Link to="/starwar/people">STAR WAR PEOPLE</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
