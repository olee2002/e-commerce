import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.scss';

const CollectionsOverview = () => {;
   const collectionData = useSelector(state=>state.shop.collections)
   const collections = (collections => Object.keys(collections).map(key => collections[key]))(collectionData)

   return (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
    }
   

export default CollectionsOverview;