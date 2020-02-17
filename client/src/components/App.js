import React from 'react';
import Collection from './Collection'
import ImageDisplay from './ImageDisplay'
import ImageFetcher from './ImageFetcher'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { collections, options } = this.props

    return (
      <div id="mainApp">
        <ImageFetcher options={options}/>
        <div className="collectionRow">
          <ImageDisplay />
          <Collection collections={collections}/>
        </div>
      </div>
    )
  }
}

export default App;
