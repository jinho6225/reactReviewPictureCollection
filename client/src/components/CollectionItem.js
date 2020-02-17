import React from 'react';

const ImageDisplay = (props) => {
  const convertImageSize = (imageUrl) => {
    let urlArr = imageUrl.split('');
    for (let i = 0; i < urlArr.length; i++) {
      let prev = urlArr[i - 1];
      let curr = urlArr[i];

      if ((prev === 'h' || prev === 'w') && curr === '=') {
        urlArr[i + 1] = '4';
      }
    }
    return urlArr.join('');
  }

  return (
    <div id="imageDisplay" className="container">
      <img src={convertImageSize(props.image)} alt=""/>
    </div>
  )
};

export default ImageDisplay;
