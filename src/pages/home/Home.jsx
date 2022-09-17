import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import GreenCard from "../../components/greanCard/GreenCard";
import SilverTeam from "../../components/silverTeam/SilverTeam";
import NewsCard from "../../components/newsCard/NewsCard";
import { greenCardData, latestUpdates } from "../../data/data.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SilverTeam />
      <div className="greenContent">
        {greenCardData.map((data) => (
          <GreenCard title={data.title} text={data.text} key={data.id} />
        ))}
      </div>
      <div className="grid">
        <h2 className="grid__first_header">Latest Updates</h2>
        <h2 className="grid__second_header">Who We Are</h2>
        <div className="grid__first_body">
          {latestUpdates.map((data) => (
            <NewsCard
              title={data.title}
              text={data.text}
              date={data.date}
              key={data.id}
              image={data.image}
            />
          ))}
        </div>
        <div className="grid__second_body"></div>
      </div>
    </div>
  );
};

export default Home;
