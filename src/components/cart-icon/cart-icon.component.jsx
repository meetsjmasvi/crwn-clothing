import { connect  } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartHidden }) => {
  return (<div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
    <span className='item-count'>0</span>
  </div>);
}

const mapDespatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDespatchToProps)(CartIcon);
