import React from "react";

import "./CatCard.scss";

interface CatCardProps {
  imgSrc: string;
}

const CatCard = ({ imgSrc }: CatCardProps) => {
  return (
    <div className="cat-card">
      <img src={imgSrc} alt="cat" />
    </div>
  );
};

export default CatCard;
