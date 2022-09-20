import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./aboutUs.scss";
import Images from "../../data/images";
import Bean from "../../components/bean/Bean";
import { doneText, latestUpdates } from "../../data/data";
import MyButton from "../../components/button/MyButton";
import NewsCard from "../../components/newsCard/NewsCard";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about_us">
        <div className="left">
          <h2>Who We Are</h2>
          <div className="left_up">
            <img src={Images.soft} alt="soft" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              accusantium. Laborum, omnis unde. Corporis iste eum provident
              repellendus saepe soluta dicta magni necessitatibus possimus ut,
              laborum ratione neque consequatur vero iusto, harum id porro.
              Veritatis facere ea, vel illo natus iure enim commodi odio
              nesciunt, eveniet dolores ullam eum aperiam doloribus autem
              aspernatur? Voluptas, expedita!
            </p>
          </div>

          <div className="left_med">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              minus reprehenderit temporibus. Corporis est dolor eveniet rem
              reprehenderit quisquam corrupti provident repudiandae
              consequuntur, tempore nemo eaque repellendus nulla, quis eligendi
              in laborum vero laudantium facere neque voluptatum nobis
              cupiditate quaerat maxime? Illum porro velit id rem odio
              perspiciatis, asperiores ratione at excepturi dolor repellendus
              blanditiis est vel saepe? Eligendi, eum?
            </p>
          </div>

          <div className="left_bottom">
            <div className="l_bottom">
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
            </div>
            <div className="r_bottom">
              <Bean text={doneText[1].text} />
              <Bean text={doneText[1].text} />
              <Bean text={doneText[1].text} />
              <Bean text={doneText[1].text} />
              <Bean text={doneText[1].text} />
              <Bean text={doneText[1].text} />
            </div>
          </div>
          <div className="left_btn">
            <MyButton text="More" />
          </div>
        </div>

        <div className="right">
          <h2>Our News</h2>
          <div className="right_up">
            <NewsCard
              title={latestUpdates[0].title}
              text={latestUpdates[0].text}
              date={latestUpdates[0].date}
              key={latestUpdates[0].id}
              image={latestUpdates[0].image}
            />
            <NewsCard
              title={latestUpdates[1].title}
              text={latestUpdates[1].text}
              date={latestUpdates[1].date}
              key={latestUpdates[1].id}
              image={latestUpdates[1].image}
            />
            <div className="right_btn">
              <MyButton text="More" />
            </div>
            <div className="right_bottom">
              <h2>Testimonals</h2>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempore eveniet ullam nobis illum, unde corrupti architecto ducimus possimus, illo quae voluptates perspiciatis quis consequuntur blanditiis. Dolorem autem ullam facilis reiciendis nemo, itaque eaque vitae rem vel nam alias iusto.</p>
              <br />
              <span className="steven">Steven - Web Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
