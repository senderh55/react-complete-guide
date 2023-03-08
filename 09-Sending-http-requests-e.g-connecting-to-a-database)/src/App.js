import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback hook is used to avoid infinite loop when useEffect hook is called again when the function changes
  // fetch data from API and store in state, then pass to MoviesList component as props
  const fetchMoviesHandler = useCallback(async () => {
    /* fetch("https://swapi.dev/api/films/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {*/
    setIsLoading(true);
    setError(null);
    try {
      //const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch(
        "https://react-course-http-11111-default-rrrr.firebaseio.com/movies.json" //  firebase database example - not aviailable
      );
      // since we not using third party library like axios, we need to throw error manually
      if (!response.ok) {
        // response.ok is a boolean value, true if response status is 200-299
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies); // update movie state with transformed data from API call
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // we want to fetch data from API when the component is rendered for the first time so we use useEffect hook
  // useEffect to allow the function to be called again when the function changes. This is done by adding the function as a dependency to the useEffect hook.
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); // fetchMoviesHandler is a dependency of useEffect hook so it will be called again when fetchMoviesHandler changes (when the button is clicked)

  async function addMovieHandler(movie) {
    const response = await fetch(
      // by default fetch method is a GET request
      "https://react-course-http-11111-default-rrrr.firebaseio.com/movies.json", //  firebase database example - not aviailable
      {
        method: "POST", // change to POST request
        body: JSON.stringify(movie), // convert movie object to JSON string
        headers: {
          // add headers to tell the server that we are sending JSON data
          "Content-Type": "application/json", // not required for firebase but required for other servers
        },
      }
    );
    const data = await response.json(); // await for the response to be returned before continuing
    console.log(data); // log the response to the console
  }

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
