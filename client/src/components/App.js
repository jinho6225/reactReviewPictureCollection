import React from 'react';

import Collection from './Collection.js'
import Collectionitem from './Collectionitem.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      currentImage: null
    }
  }

  componentDidMount() {
    let { collection, currentImage } = this.props;
    this.setState({ collection, currentImage: collection[0] });
  }

  render() {
    const { collection, currentImage } = this.state;
    return (
    <div id="mainApp">
        <Collection collections={collection}/>
      <div className="collectionRow">
        <Collectionitem currentImage={currentImage} />
      </div>
    </div>
    )
  }
}


export default App;
