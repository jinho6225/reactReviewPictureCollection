import React from 'react';
import axios from 'axios';

class ImageFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.getImg = this.getImg.bind(this)
  }

  getImg() {
    const { addImg } = this.props
    axios.get(`https://source.unsplash.com/random/100x100`)
      .then(function (response) {
        addImg(response.request.responseURL);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container">
          <button onClick={this.getImg} >Add Picture</button>
      </div>
    )
  }
}

export default ImageFetcher;
