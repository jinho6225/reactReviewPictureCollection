import React from 'react';
import Collection from './Collection'
import ImageDisplay from './ImageDisplay'
import ImageFetcher from './ImageFetcher'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: []
    }
    this.addImg = this.addImg.bind(this)
    this.getImg = this.getImg.bind(this)
  }

  componentDidMount () {
    const { collections } = this.props;
    this.setState({ collections });
  }

  getImg() {
    const addImg = this.addImg
    axios.get(`https://source.unsplash.com/random/100x100`)
      .then(function (response) {
        addImg(response.request.responseURL);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  addImg(imgURL) {
    this.setState({
      collections: [...this.state.collections, imgURL]
    });
  }

  render() {
    const { collections } = this.state;
    return (
      <div id="mainApp">
        <ImageFetcher getImg={this.getImg} />
        <div className="collectionRow">
          <ImageDisplay />
          <Collection collections={collections}/>
        </div>
      </div>
    )
  }
}

export default App;
