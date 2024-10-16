import React from "react";
import Image from "next/image";
export default function MovieCard({ item }: { item: any }) {
  return (
    <div className="portfolio-item padd-15" data-category={item.category}>
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
  );
}
