import React from "react";
import "./newsCard.scss";

const NewsCard = ({ title, text, date, image }) => {
  return (
    <div className="news_card">
      <div className="upper">
        <img src={image} alt="img" />
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
      <div className="line"></div>
      <span>{date}</span>
    </div>
  );
};

export default NewsCard;
