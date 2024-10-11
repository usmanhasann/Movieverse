"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import NurtitionImg from "../../../public/imgs/portfolio/nutrition.png";
import GrillMaster from "../../../public/imgs/portfolio/grill master.png";
import pricebook from "../../../public/imgs/portfolio/pricebook.png";
import FrontEndImg from "../../../public/imgs/portfolio/4.jpg";
import pricebookCont from "../../../public/imgs/portfolio/pricebook-cont.png";
import PricebookAdmin from "../../../public/imgs/portfolio/Pricebook-admin.png";
import Grill2img from "../../../public/imgs/portfolio/grill-2.png";
import SubwayImg from "../../../public/imgs/portfolio/Subway.png";
import PakItSystemImg from "../../../public/imgs/portfolio/PakItSystem img.png";

const Portfolio: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "web-design",
      title: "Nutrition",
      image: NurtitionImg,
    },
    {
      id: 2,
      category: "web-design",
      title: "Grill Master",
      image: GrillMaster,
    },
    {
      id: 3,
      category: "web-design",
      title: "PriceBook HomeOwner",
      image: pricebook,
    },
    {
      id: 4,
      category: "graphics-design",
      title: "Front-End Development",
      image: FrontEndImg,
    },
    {
      id: 5,
      category: "nextjs",
      title: "PriceBook Contractors",
      image: pricebookCont,
    },
    {
      id: 6,
      category: "web-design",
      title: "PriceBook Admin",
      image: PricebookAdmin,
    },
    {
      id: 7,
      category: "web-design",
      title: "Grilli Master",
      image: Grill2img,
    },
    {
      id: 8,
      category: "web-design",
      title: "Subway Project",
      image: SubwayImg,
    },
    {
      id: 9,
      category: "nextjs", // Update category for PakItSystem
      title: "PakItSystem",
      image: PakItSystemImg,
    },
  ];

  // Filter portfolio items based on active category
  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
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
                className={activeCategory === "graphics-design" ? "active" : ""}
                onClick={() => setActiveCategory("graphics-design")}
              >
                Web Design
              </button>
              <button
                type="button"
                className={activeCategory === "web-design" ? "active" : ""}
                onClick={() => setActiveCategory("web-design")}
              >
                React.js
              </button>

              <button
                type="button"
                className={activeCategory === "nextjs" ? "active" : ""}
                onClick={() => setActiveCategory("nextjs")}
              >
                Next.js
              </button>
            </div>
          </div>

          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="portfolio-item padd-15"
                  data-category={item.category}
                >
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <Image src={item.image} alt={item.title} />
                    </div>
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <div className="icon">
                        <i className="fa fa-search" />
                      </div>
                    </div>
                  </div>
                </div>
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

export default Portfolio;
