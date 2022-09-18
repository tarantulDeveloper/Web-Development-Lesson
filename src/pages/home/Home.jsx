import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import GreenCard from "../../components/greanCard/GreenCard";
import SilverTeam from "../../components/silverTeam/SilverTeam";
import { greenCardData} from "../../data/data.js";
import HomeGreed from "../../components/homeGreed/HomeGreed";

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
      <div>
        <HomeGreed />
      </div>
    </div>
  );
};

export default Home;
