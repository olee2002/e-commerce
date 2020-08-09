import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';

const CollectionItem = (props) => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state=>state.cart.cartItems);
   const { id, name, price, imageUrl } = props.item;
   const isSelected = cartItems && cartItems[0] && cartItems.map(item=>item.id).includes(id);
   return (
      <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(props.item))} inverted>
        Add to cart { isSelected ? <CheckCircleOutlineIcon style={{color:'green', marginLeft: '5px'}} fontSize='large'/> : null }
      </CustomButton>
    </div>
);
   }

export default CollectionItem;