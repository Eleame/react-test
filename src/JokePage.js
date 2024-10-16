import React, { useState, useEffect } from "react";

const JokePage = () => {
  const [joke, setJoke] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random?category=dev");
    const data = await response.json();
    setJoke(data.value);
    setLastUpdated(new Date().toLocaleString());
  };

  useEffect(() => {
    fetchJoke();
    const intervalId = setInterval(fetchJoke, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container joke-container">
      <h2>Chuck Norris Developer Joke</h2>
      <p>{joke}</p>
      <p>Last updated: {lastUpdated}</p>
    </div>
  );
};

export default JokePage;
