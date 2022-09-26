import React from "react";
import BorderedImage from "../../components/borderedImage/BorderedImage";
import GreyLine from "../../components/greyLine/GreyLine";
import Navbar from "../../components/navbar/Navbar";
import styles from "./LatestNews.module.scss";
import Images from "../../data/images";
import { doneText, latestUpdates } from "../../data/data";
import NewsCard from "../../components/newsCard/NewsCard";
import MyButton from "../../components/button/MyButton";
import Bean from "../../components/bean/Bean";

const LatestNews = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <GreyLine height="3px" />
          <p className={styles.up_up}>
            Posted in <a href="#">Web Templates</a>, <a href="#">CSS</a> | Date:
            June 28, 2048
          </p>
          <br />
          <h2 style={{ paddingBottom: "5px" }}>Lorem ipsum dolor sit amet.</h2>
          <GreyLine height="1px" />
          <br />
          <BorderedImage source={Images.potolok} />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            perspiciatis debitis magni porro minus voluptatibus esse sunt ipsam
            natus nisi officia fugit, quia eos doloribus soluta tenetur
            accusantium consequuntur excepturi et! Temporibus, magni sapiente
            ducimus reiciendis eveniet ex similique soluta.
          </p>
          <br />
          <div className={styles.button}>
            <MyButton text="More" />
          </div>
          <br />
          <br />
          <GreyLine height="1px" />
          <br />
          <br />
          <GreyLine height="3px" />
          <p className={styles.up_up}>
            Posted in <a href="#">Web Templates</a>, <a href="#">CSS</a> | Date:
            June 28, 2048
          </p>
          <br />
          <h2 style={{ paddingBottom: "5px" }}>Lorem ipsum dolor sit amet.</h2>
          <GreyLine height="1px" />
          <br />
          <BorderedImage source={Images.apple} />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            perspiciatis debitis magni porro minus voluptatibus esse sunt ipsam
            natus nisi officia fugit, quia eos doloribus soluta tenetur
            accusantium consequuntur excepturi et! Temporibus, magni sapiente
            ducimus reiciendis eveniet ex similique soluta.
          </p>
          <br />
          <div className={styles.button}>
            <MyButton text="More" />
          </div>
          <br />
          <br />
          <GreyLine height="1px" />
        </div>

        <div className={styles.right}>
          <div className={styles.categories}>
            <h2>Categories</h2>
            <br />
            <div className={styles.content}>
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
              <Bean text={doneText[0].text} />
            </div>
          </div>
          <br />
          <br />
          <h2>Our News</h2>
          <div className={styles.ourNews}>
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
          </div>
          <br />
          <br />
          <div>
            <div className={styles.button}>
              <MyButton text="More" />
            </div>
          </div>
          <br />
          <br />
          <div className={styles.right_bottom}>
              <h2>Testimonals</h2>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempore eveniet ullam nobis illum, unde corrupti architecto ducimus possimus, illo quae voluptates perspiciatis quis consequuntur blanditiis. Dolorem autem ullam facilis reiciendis nemo, itaque eaque vitae rem vel nam alias iusto.</p>
              <br />
              <span className={styles.steven}>Steven - Web Designer</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
