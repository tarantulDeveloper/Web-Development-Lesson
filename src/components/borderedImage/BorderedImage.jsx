import React from 'react';
import './borderedImage.scss';

const BorderedImage = ({source}) => {
  return (
    <div className='borderedImage'>
        <img src={source} alt="photo" />
    </div>
  )
}

export default BorderedImage