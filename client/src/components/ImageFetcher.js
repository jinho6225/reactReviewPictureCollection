import React from 'react';

class ImageFetcher extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { getImage } = this.props
    return (
      <div className="container">
          <button onClick={getImage} >Add Picture</button>
      </div>
    )
  }
}

export default ImageFetcher;
