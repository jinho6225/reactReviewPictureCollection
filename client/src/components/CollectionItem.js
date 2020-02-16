import React from 'react';

function Collectionitem(props) {
  const { currentImage } = props

  return (
    <div>
      <img src={currentImage} alt=""/>
    </div>
  )
}

export default Collectionitem;
