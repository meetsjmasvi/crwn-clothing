import React from 'react';
import { connect  } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (<CartContainer>
    <ShoppingIcon onClick={toggleCartHidden} />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>);
}

const mapDespatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (scope) =>({
  itemCount: selectCartItemsCount(scope)
});

export default connect(mapStateToProps, mapDespatchToProps)(CartIcon);
