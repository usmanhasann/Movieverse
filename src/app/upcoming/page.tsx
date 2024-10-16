"use client";
import { useState } from "react";

import { upcomingMovies } from "@/components/utilities/UpcomingMovies";
import MovieCard from "@/components/MovieCard";
const upcoming = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Movies list
  const filteredItems =
    activeCategory === "all"
      ? upcomingMovies
      : upcomingMovies.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Upcoming </h2>
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
                className={activeCategory === "web-movie" ? "active" : ""}
                onClick={() => setActiveCategory("web-movie")}
              >
                Hollywood
              </button>
            </div>
          </div>

          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MovieCard key={item.id} item={item} />
              ))
            ) : (
              <div className="coming-soon padd-15">
                <h3>Coming Soon</h3>
                <p>We are working on adding more content for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .coming-soon {
          text-align: center;
          color: #ff6347;
          font-style: italic;
          padding: 50px 0;
          background-color: #f0f0f0;
          border-radius: 10px;
        }

        .coming-soon h3 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .coming-soon p {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default upcoming;
