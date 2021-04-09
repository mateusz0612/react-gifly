import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <main>
      <section className="about">
        <h1>Welcome at Gifly!</h1>
        <h2>What is gifly?</h2>
        <p className="description">
          Gifly is a React application for searching gifs using Giphy API. Go to{" "}
          <span>Trending</span> to see trending gifs. You can also go to{" "}
          <span>Search</span> to find gifs that match query you gave. Click on
          gif <span>title</span> to get more info about him.
        </p>
        <h3>Happy hacking!</h3>
      </section>
    </main>
  );
};

export default Home;
