import React from "react";
import Image from "next/image";

interface MovieCardProps {
  title: string;
  posterPath?: string;
  description: string;
}

export default function MovieCard({
  title,
  posterPath,
  description,
}: MovieCardProps) {
  return (
    <div className="portfolio-item padd-15">
      <div className="portfolio-item-inner shadow-dark">
        <div className="portfolio-img">
          <Image src={posterPath ?? ""} alt={title} width={300} height={450} />{" "}
          {/* Adjust size as needed */}
        </div>
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="icon">
            <i className="fa fa-search" />
          </div>
        </div>
      </div>
    </div>
  );
}
