import React from 'react';

class ImageFetcher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { getImg } = this.props
    return (
      <div className="container">
          <button onClick={getImg} >Add Picture</button>
      </div>
    )
  }
}

export default ImageFetcher;
