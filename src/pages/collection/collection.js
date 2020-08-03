import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item';

import './collection.styles.scss';

const CollectionPage = () => {
   const { collectionId } = useParams();
  const { title, items } = useSelector(state=>state.shop.collections[collectionId])
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
