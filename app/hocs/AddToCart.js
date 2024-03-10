import React, {useEffect, useState} from 'react';
import {theme} from '../theme';
import {screenWidth} from '../theme/common-style';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, decrement, increment} from '../redux/reducers/cartSlice';
import InputButtons from './InputButtons';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AddToCartButton from './AddToCartButton';

const AddToCart = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.Cart.data);
  const [itemAdded, setItemAdded] = useState(false);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    const itemId = props.item?.id;
    const isItemAdded = cart?.some(e => e?.id === itemId);
    setItemAdded(!!isItemAdded);
    if (isItemAdded) {
      const index = cart.findIndex(_e => _e?.id === itemId);
      setQuantity(index > -1 ? cart[index]?.quantity : undefined);
    }
  }, [cart, props]);

  const handleAddToCart = (item, type) => {
    let cartObject = {
      id: item?.id,
      productName: item?.productName,
      price: item?.price,
      quantity: item?.weight,
      stock: item?.stock,
      weight: item?.weight,
    };
    dispatch(addItem(cartObject));
  };

  const handleDecrement = item => {
    try {
      dispatch(decrement(item));
    } catch (error) {
      console.log('====eor', error);
    }
  };

  const handleIncrement = item => {
    try {
      const index = cart?.findIndex(_e => _e?.id === item?.id);
      if (cart[index].quantity < item?.stock) {
        dispatch(increment(item));
      } else {
        Toast.show({
          type: 'error',
          text1: 'Product Limit Exceeds',
          text2: 'Maximum quantity per order added. ',
          autoHide: true,
          visibilityTime: 2000,
        });
      }
    } catch (error) {
      console.log('===error', error);
    }
  };

  return (
    <>
      {!itemAdded ? (
        <AddToCartButton
          onPress={() => handleAddToCart(props.item)}
          buttonHeight={
            props.addToCartButtonHeight
              ? props.addToCartButtonHeight
              : 0.08 * screenWidth
          }
          borderRadius={props.borderRadius}
          borderColor={theme.colors.primary}
        />
      ) : (
        <InputButtons
          quantity={quantity}
          onPressPlus={() => handleIncrement(props.item)}
          onPressMinus={() => handleDecrement(props.item)}
          borderWidth={props.borderWidth}
          borderColor={props.borderColor}
          borderBottomRightRadius={props.borderBottomRightRadius}
          paddingHorizontal={props.paddingHorizontal}
          inputButtonsBackgroundColor={props.inputButtonsBackgroundColor}
          addToCartButtonHeight={props.addToCartButtonHeight}
          borderRadius={props.borderRadius}
          inputButtonContainerColor={props.inputButtonContainerColor}
          inputButtonIconColor={props.inputButtonIconColor}
          inputButtonContainerWidth={props.inputButtonContainerWidth}
        />
      )}
    </>
  );
};

export default AddToCart;
