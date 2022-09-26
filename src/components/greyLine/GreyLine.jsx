import React from 'react';
import './greyLine.scss';

const GreyLine = ({height}) => {
  return (
    <div className='grayLine' style={{height: `${height}`}}></div>
  )
}

export default GreyLine;