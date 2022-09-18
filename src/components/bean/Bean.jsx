import React from 'react';
import './bean.scss';
import Images from '../../data/images';

const Bean = ({text}) => {
  return (
    <div className="bean">
        <div>
        <img src={Images.done} alt="done" />
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Bean