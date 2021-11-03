import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalsSingle = (props) => {
  let { animal } = useParams();
  let history = useHistory();

  return (
    <div className="animalsingle">
      <h1>This is the page for {animal} </h1>
      <img
        alt="Images from unsplash"
        src={`https://source.unsplash.com/1600x900/?${animal}`}
      />
      <div>
        <button onClick={() => history.goBack()}>Back to Animals</button>
      </div>
    </div>
  );
};

export default AnimalsSingle;
