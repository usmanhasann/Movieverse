"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import axios from "axios";

const Home: React.FC = () => {
  // Define the type for the response data
  type MovieResponse = {
    _id: number;
    title: string;
    poster_path: string;
    overview: string;
  };

  const [movies, setMovies] = useState<MovieResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://movies-api14.p.rapidapi.com/shows",
        headers: {
          "x-rapidapi-key":
            "5a34c575e5msh42acf8f54b481ebp178946jsnda01620a4899",
          "x-rapidapi-host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("Fetched Movies:", response.data.movies); //! Log fetched movies to the console
        setMovies(response.data.movies); //! Adjust according to the response structure
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
      }
    };

    fetchMovies(); // Call the function to fetch movies
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Movies</h2>
            </div>
          </div>

          <div className="row">
            {error ? (
              <div className="coming-soon padd-15">{error}</div>
            ) : movies.length > 0 ? (
              movies.map((item: MovieResponse) => (
                <MovieCard
                  key={item._id}
                  title={item.title}
                  posterPath={item.poster_path}
                  description={item.overview}
                />
              ))
            ) : (
              <div className="coming-soon padd-15">Movies not found</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
