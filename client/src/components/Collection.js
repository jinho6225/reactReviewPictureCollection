import React from 'react';

function Collection(props) {
  const { collections } = props

  return (
    <div className="container" id="collection">
      {collections.map((collection, i) => {
        return <img key={i} src={collection} />
      })}
    </div>
  )
}

export default Collection;
