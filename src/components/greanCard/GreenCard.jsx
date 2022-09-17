import React from 'react';
import './greenCard.scss';

const GreenCard = ({title, text}) => {
  return (
    <div className='greenCard'>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="greenCard__bottom">
        <button>More</button>
        </div>
    </div>
  )
}

export default GreenCard