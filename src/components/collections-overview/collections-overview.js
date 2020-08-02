import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
   console.log('collection hh', collections)
   return (
  <div className='collections-overview'>
    {collections && collections.length>0 && collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
    }

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default CollectionsOverview;