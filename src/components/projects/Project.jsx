import React from 'react';
import styles from './Project.module.scss';


const Project = ({image, text}) => {
  return (
    <div className={styles.photo}>
        <img src={image} alt="photo" />
        <div className={styles.photoLabel}>{text}</div>
    </div>
  )
}

export default Project