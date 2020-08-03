import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {
   console.log('match12345', match, match.path);
   return(
  <div className='shop-page'>
    {
    match.params && match.params.collectionId ? 
    <CollectionPage />
    : 
    <CollectionsOverview />
    }
  </div>
);
   }
 
export default ShopPage; 