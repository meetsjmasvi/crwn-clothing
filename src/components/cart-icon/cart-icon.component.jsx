import { connect  } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (<div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
    <span className='item-count'>{itemCount || 0}</span>
  </div>);
}

const mapDespatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (scope) =>({
  itemCount: selectCartItemsCount(scope)
});

export default connect(mapStateToProps, mapDespatchToProps)(CartIcon);
