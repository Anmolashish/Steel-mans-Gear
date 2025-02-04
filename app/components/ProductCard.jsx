import Image from "next/image";
import React from "react";

const truncateWords = (text, maxWords) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};

const ProductCard = (props) => {
  return (
    <div className="product-card flex flex-column justify-space-between">
      <div className="product-image">
        <img src={props.image} alt="Gear Edge product image" />
      </div>
      <div className="product-data">
        <h2 className="product-category">{props.name}</h2>
        <p className="product-description">
          {truncateWords(props.description, 10)} {/* Limit to 20 words */}
        </p>
        <div className="product-rating">
          ★★★★★
          <span>({props.review})</span>
        </div>
        <button className="select-options-button">VIEW MORE</button>
      </div>
    </div>
  );
};

export default ProductCard;
