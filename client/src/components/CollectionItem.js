import React from 'react';

const CollectionItem = (props) => {
  const { collection } = props

  return (
    <div>
      <img src={collection} alt=""/>
    </div>
  )
}

export default CollectionItem;
