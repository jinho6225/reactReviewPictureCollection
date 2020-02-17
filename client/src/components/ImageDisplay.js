import React from 'react';

const ImageDisplay = (props) => {
  const { currentImg } = props
  return (
    <div id="" className="container">
      <img src={currentImg} alt="" height="200" width="200" />
    </div>
  )
}

export default ImageDisplay;
