import React, {useState} from "react";
import NewsCard from "../newsCard/NewsCard";
import {latestUpdates, doneText} from '../../data/data';
import Images from '../../data/images';
import Bean from "../bean/Bean";
import './homeGreed.scss';

const HomeGreed = () => {
  const [dones, setDones] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <div className="title_line">
        <h2>Latest Update</h2>
        <h2>Who We Are</h2>
        <h2></h2>
      </div>
      <div className="main_grid">
        <div className="left">
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
        <div className="right">
          <div className="l_upper">
            <p className="upper_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, laboriosam possimus ducimus ullam, velit magni a iste
              fuga maiores.
            </p>
            <br />
            <p>
              <a href="#">Lorem ipsum dolor</a> sit amet consectetur adipisicing
              elit. Nesciunt facere amet inventore illum dignissimos accusantium
              autem, quae animi nam laborum placeat sunt harum quisquam
              molestiae nostrum corrupti accusamus iste veritatis quis
              laudantium modi! Cumque atque provident, ea doloribus quis modi.
            </p>
          </div>
          <div className="r_image">
            <img src={Images.lemon_right_home} alt="lemon" />
          </div>
          <div className="l_lower">
            {dones.map((i) => (
              <Bean text={doneText[1].text} key={i} />
            ))}
          </div>
          <div className="r_lower">
            {dones.map((i) => (
              <Bean text={doneText[0].text} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="bottom_btns">
        <div>
          <button className="view_all">View All</button>
        </div>
        <div>
          <button className="view_all">More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeGreed;
