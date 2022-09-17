import React from 'react';
import suitcase from "../../images/suitcase.png";
import learnMore from "../../images/learn_more.png";
import './silverTeam.scss';

const SilverTeam = () => {
  return (
    <div className="silver_team">
        <div className="right">
          <h1>Welcome to Silver Team</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, excepturi quas distinctio enim assumenda cumque
            quisquam at totam harum adipisci rerum dolore placeat repellendus
            facilis! Necessitatibus architecto laudantium animi incidunt
            voluptatum soluta voluptate odio nisi beatae, praesentium
          </p>
          <img src={learnMore} alt="learn more" />
        </div>
        <div className="left">
          <img src={suitcase} alt="suitcase" />
        </div>
      </div>
  )
}

export default SilverTeam