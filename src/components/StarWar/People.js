import React from "react";

export const People = (props) => {
  const { people } = props;

  return (
    <div className="people">
      <h2>{people.name}</h2>
      <h3>
        {people.gender == "n/a"
          ? "N/A"
          : people.gender[0].toUpperCase() + people.gender.slice(1)}
      </h3>
      <div className="people-details">
        <span>
          Skin Color:{" "}
          {people.skin_color[0].toUpperCase() + people.skin_color.slice(1)}
        </span>{" "}
        <span>Height: {people.height}</span> <span>Mass: {people.mass}</span>
      </div>
    </div>
  );
};
