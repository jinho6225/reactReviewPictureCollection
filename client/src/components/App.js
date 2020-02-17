import React from 'react';
import Collection from './Collection'
import ImageDisplay from './ImageDisplay'
import ImageFetcher from './ImageFetcher'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: []
    }
    this.addImg = this.addImg.bind(this)
  }

  componentDidMount () {
    const { collections } = this.props;
    this.setState({ collections });
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
        <ImageFetcher addImg={this.addImg} />
        <div className="collectionRow">
          <ImageDisplay />
          <Collection collections={collections}/>
        </div>
      </div>
    )
  }
}

export default App;
