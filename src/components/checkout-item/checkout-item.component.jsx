import React from 'react';
import { connect } from 'react-redux';
import { clearCartItem, addItems, removeItems } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearCartItem, addCartItem, removeCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeCartItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span onClick={() => {
        clearCartItem(cartItem)
      }} className='remove-button'>&#10005;</span>
    </div>
  );
}

const mapDespatchToProps = despatch => ({
  clearCartItem: item => despatch(clearCartItem(item)),
  addCartItem: item => despatch(addItems(item)),
  removeCartItem: item => despatch(removeItems(item))
})

export default connect(null, mapDespatchToProps)(CheckoutItem);