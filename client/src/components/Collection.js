import React from 'react';
import CollectionItem from './CollectionItem'


const Collection = (props) => {
  const { collections } = props

  return (
    <div className="container" id="collection">
      {collections.map((collection, i) =>
        <CollectionItem collection={collection} key={i} />
      )}
    </div>
  )
}

export default Collection;
