"use client";
import { useState } from "react";
import { homeMovies } from "@/components/utilities/HomeMovies";
import MovieCard from "@/components/MovieCard";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Movies list
  const filteredItems =
    activeCategory === "all"
      ? homeMovies
      : homeMovies.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Scify/Anime</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button
                type="button"
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => setActiveCategory("all")}
              >
                All
              </button>

              <button
                type="button"
                className={activeCategory === "Bolly" ? "active" : ""}
                onClick={() => setActiveCategory("Bolly")}
              >
                Anime only
              </button>
            </div>
          </div>

          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MovieCard key={item.id} item={item} />
              ))
            ) : (
              <div className="coming-soon padd-15">Movies not found</div> // Message when no movies are found
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
