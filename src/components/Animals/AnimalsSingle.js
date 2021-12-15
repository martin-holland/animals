import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalsSingle = (props) => {
  let { animal } = useParams();
  let history = useHistory();
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=true&titles=${animal}`;

  const retrieveContents = (json) => {
    const { pages } = json.query;
    return Object.keys(pages).map((id) => pages[id].extract);
  };

  const getContents = async () => {
    let resp;
    let contents = [];
    setLoading(true);
    try {
      resp = await fetch(endpoint);
      const json = await resp.json();
      contents = retrieveContents(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    setContents(contents);
  };

  useEffect(() => {
    getContents();
  }, []);

  if (loading) return "Please wait, Loading....";
  if (error) return "Error occured while getting data.";

  return (
    <div className="animalsingle">
      <h1>This is the page for {animal} </h1>
      <img
        alt="Images from unsplash"
        src={`https://source.unsplash.com/1600x900/?${animal}`}
      />
      <div className="animalinfobox">
        {contents.map((content) => (
          <div
            className="animalinfo"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </div>

      <div>
        <button onClick={() => history.goBack()}>Back to Animals</button>
      </div>
    </div>
  );
};

export default AnimalsSingle;
