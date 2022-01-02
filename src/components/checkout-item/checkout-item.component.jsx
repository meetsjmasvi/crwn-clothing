import React from 'react';
import { connect } from 'react-redux';
import { 
  clearCartItem, 
  addItems, 
  removeItems 
} from '../../redux/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearCartItem, addCartItem, removeCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer><img src={imageUrl} alt='item' /></ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeCartItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addCartItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => { clearCartItem(cartItem) }}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

const mapDespatchToProps = despatch => ({
  clearCartItem: item => despatch(clearCartItem(item)),
  addCartItem: item => despatch(addItems(item)),
  removeCartItem: item => despatch(removeItems(item))
})

export default connect(null, mapDespatchToProps)(CheckoutItem);