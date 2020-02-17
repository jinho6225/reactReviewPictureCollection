
import React from 'react';

import Collection from './Collection.js';
import ImageDisplay from './ImageDisplay.js';
import ImageFetcher from './ImageFetcher.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      currentImage: null
    }

    this.changeImage = this.changeImage.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    let { collection } = this.props;
    this.setState({ collection, currentImage: collection[0] });
  }

  changeImage(currentImage) {
    this.setState({ currentImage });
  }

  addImage(imageUrl) {
    this.setState({ collection: [...this.state.collection, imageUrl]})
  }

  render() {
    let { collection, currentImage } = this.state;

    return (
      <div id="mainApp">
        <ImageFetcher options={this.props.options} addImage={this.addImage}/>
        <div className="collectionRow">
          {currentImage && <ImageDisplay image={currentImage} />}
          <Collection collection={collection} changeImage={this.changeImage}/>
        </div>
      </div>
    )
  }
}

export default App;
