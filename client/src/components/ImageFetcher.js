import React from 'react';
import axios from 'axios';

class ImageFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }

    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.setState({ options: this.props.options });
  }

  getImage(e) {
    let { value } = e.target;

    axios
      .get(`https://source.unsplash.com/100x100/?${value}`)
      .then(result => this.props.addImage(result.request.responseURL))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        {this.state.options.map((option, i) =>
          <button key={i} value={option} onClick={this.getImage}>{option}</button>
        )}
      </div>
    )
  }
}

export default ImageFetcher;
