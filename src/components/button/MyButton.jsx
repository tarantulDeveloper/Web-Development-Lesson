import React from 'react';
import './myButton.scss';

const MyButton = ({text}) => {
  return (
    <React.Fragment>
        <button className='btn'>{text}</button>
    </React.Fragment>
  )
}

export default MyButton