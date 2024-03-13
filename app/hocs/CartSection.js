import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  screenWidth,
  fontSize,
  screenHeight,
  fontWeight,
} from '../theme/common-style';
import {theme} from '../theme';
import InputButtons from './InputButtons';
import {decrement, increment} from '../redux/reducers/cartSlice';
import {numberWithCommas} from './NumberWithCommas';
import {screens} from '../config';
import ProductImage from '../assets/images/productImage.png';

const CartSection = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.Cart.data);

  const calculateTotalPrice = cartItems => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const productSection = item => {
    const handleDecrement = item => {
      dispatch(decrement(item));
    };
    const handlePlus = item => {
      dispatch(increment(item));
    };

    return (
      <View style={styles.productSectionCont}>
        <View style={styles.productImageView}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(screens.detail, {
                productDetail: item,
              });
            }}>
            <Image
              style={styles.productImage}
              source={ProductImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={{width: '30%'}}>
            <Text style={styles.title}>{item.productName.split(' - ')[0]}</Text>
            <Text style={styles.productPrice}>
              {' '}
              Rs. {numberWithCommas(item.price)}
            </Text>
          </View>
          <View style={{width: '35%', alignItems: 'center'}}>
            <InputButtons
              height={40}
              paddingHorizontal={0}
              width={'100%'}
              borderRadius={8}
              quantity={item.quantity}
              onPressPlus={() => handlePlus(item)}
              onPressMinus={() => handleDecrement(item)}
              borderColor={props.borderColor}
              inputButtonsBackgroundColor={'#F5F9FF'}
              inputButtonIconColor={theme.colors.primary}
            />
            <Text style={styles.productPrice}>
              Rs.{' '}
              {numberWithCommas(item.price * (item?.quantity / item?.weight))}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.cartSectionCont}>
        <View style={styles.cartItems}>
          <Text
            style={{
              fontSize: fontSize.verbiage_20,
              fontWeight: fontWeight[700],
              color: theme.colors.primary,
            }}>
            {' '}
            Items: {cart.length}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.onClearPress()}
          style={styles.clearCartView}>
          <Text style={styles.clearCartText}>Clear Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cartProductListItem}>
        <View style={{width: '100%', alignItems: 'center'}}>
          {cart?.map((item, index) => {
            return productSection(item);
          })}
        </View>
      </View>
      <View style={styles.totalBillCont}>
        <View style={styles.totalBillSecCont}>
          <Text style={styles.total}>{'Total'}</Text>
          <Text style={styles.total}>
            Rs.{' '}
            {Object.is(calculateTotalPrice(), NaN)
              ? 0
              : numberWithCommas(
                  Math.round(
                    calculateTotalPrice() <= 0 ? 0 : calculateTotalPrice(),
                  ),
                )}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CartSection;

const styles = StyleSheet.create({
  productSectionCont: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    width: '95%',
    marginTop: 10,
    height: 0.2 * screenWidth,
    alignSelf: 'center',
  },
  productImageView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '65%',
    justifyContent: 'space-evenly',
  },
  productImage: {
    width: 0.2 * screenWidth,
    height: 0.06 * screenHeight,
    marginTop: 10,
  },
  title: {
    fontSize: fontSize.verbiage_small_12,
    fontWeight: fontWeight[700],
    color: theme.colors.primary,
  },
  productPrice: {
    fontSize: fontSize.verbiage_small_12,
    fontWeight: fontWeight[700],
    color: theme.colors.primary,
    paddingTop: 5,
  },
  cartSectionCont: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearCartView: {alignItems: 'flex-end', backgroundColor: theme.colors.white},
  clearCartText: {
    fontSize: fontSize.verbiage_empty_screen_18,
    fontWeight: fontWeight[400],
    color: '#8F9BB3',
  },
  cartProductListItem: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 0.91 * screenWidth,
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  totalBillCont: {
    width: 0.9 * screenWidth,
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  totalBillSecCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  total: {
    paddingTop: 5,
    fontSize: fontSize.verbiage_16,
    fontWeight: fontWeight[400],
    color: 'black',
  },
});
