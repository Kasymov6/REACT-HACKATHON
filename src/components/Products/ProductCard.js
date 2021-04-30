import React from "react";
// import "./TopicCard.css";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <Link to={`/details/${props.item.id}`}>
      <div className="card">
        <p>{props.item.title}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
