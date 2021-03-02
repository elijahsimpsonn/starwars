import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import "./Main.css";

function Main() {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [crawl, setCrawl] = useState("");

  useEffect(() => {
    fetchData().then((res) => setFilms(res));
  }, [title]);

  const handleClick = (id) => {
    for (let i = 0; i < films.length; i++) {
      if (films[i].episode_id === id) {
        setTitle(films[i].title);
        setDate(films[i].release_date);
        setCrawl(films[i].opening_crawl);
      }
    }
  };

  console.log(crawl);
  console.log(date);

  return (
    <>
      <div className="sidebar">
        <ul>
          {films.map((film) => {
            return (
              <button onClick={() => handleClick(film.episode_id)}>
                {film.title}
              </button>
            );
          })}
        </ul>
      </div>

      <div className="container">
        <div className="crawl">
            <h1>{title}</h1>
            <h3>{date}</h3>
            {crawl.split("\n").map((e) => (
              <p>{e}</p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Main;
