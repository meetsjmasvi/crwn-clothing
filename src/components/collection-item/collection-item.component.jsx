import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItems  } from '../../redux/cart/cart.action';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItems(item)} inverted>Add To Cart</AddButton>
    </CollectionItemContainer>
  );
}

const mapDespatchToProps = despatch => ({
  addItems: item => despatch(addItems(item))
});

export default connect(null, mapDespatchToProps)(CollectionItem);
