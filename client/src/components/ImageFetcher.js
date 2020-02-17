import React from 'react';

const ImageFetcher = (props) => {
  const { options } = props

  const clickHandler = () => {
    console.log('watsup!')
  }

  return (
    <div className="container">
      {options.map((option, i) =>
        <button onClick={clickHandler} key={i}>{option}</button>
      )}
    </div>
  )
}

export default ImageFetcher;
