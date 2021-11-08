import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItems  } from '../../redux/cart/cart.action';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;

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

      <CustomButton onClick={() => addItems(item)} inverted>Add To Cart</CustomButton>
    </div>
  );
}

const mapDespatchToProps = despatch => ({
  addItems: item => despatch(addItems(item))
});

export default connect(null, mapDespatchToProps)(CollectionItem);
