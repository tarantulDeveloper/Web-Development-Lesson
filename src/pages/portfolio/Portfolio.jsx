import React from 'react';
import styles from './Portfolio.module.scss';
import Navbar from '../../components/navbar/Navbar';
import Project from '../../components/projects/Project';
import Images from '../../data/images';

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <h1>Our gallery</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, mollitia doloribus aperiam voluptatibus voluptas consequuntur nesciunt necessitatibus cum amet, animi dicta nemo suscipit, quo voluptatem. Eaque, doloremque enim cumque, saepe cupiditate placeat nihil nostrum quibusdam voluptatem quas iste itaque tempora, possimus eum sit accusantium adipisci. Aliquid ipsam accusamus ullam pariatur.</p>
        <div className={styles.gridGallery}>
            <Project image={Images.first} text="Project I" />   
            <Project image={Images.second} text="Project II" />
            <Project image={Images.third} text="Project III" />
            <Project image={Images.fourth} text="Project IV" />
            <Project image={Images.fifth} text="Project V" />
            <Project image={Images.sixth} text="Project VI" />
        </div>
    </div>
  )
}

export default Portfolio