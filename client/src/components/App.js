import React from 'react';
import Collection from './Collection'
import ImageDisplay from './ImageDisplay'
import ImageFetcher from './ImageFetcher'
import axios from 'axios'


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
    axios.get(`https://source.unsplash.com/random`)
      .then(function (response) {
        this.addImg(response.request.responseURL);
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
        <ImageFetcher getImage={this.getImg} />
        <div className="collectionRow">
          <ImageDisplay />
          <Collection collections={collections}/>
        </div>
      </div>
    )
  }
}

export default App;
