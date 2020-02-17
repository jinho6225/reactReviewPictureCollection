import React from 'react';

class CollectionItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  const { collection, changeImg } = this.props
    return (
      <div>
        <img src={collection} onClick={() => {
          changeImg(collection)
        }} alt=""/>
      </div>
    )
  }
}

export default CollectionItem;
