import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {theme} from '../theme';
import {
  fontSize,
  fontWeight,
  screenHeight,
  screenWidth,
} from '../theme/common-style';
import {useSelector} from 'react-redux';
import HeaderCart from '../assets/images/CartIcon.png';

const MenuHeader = props => {
  const cart = useSelector(state => state.Cart.data);
  const [CartCount, setCartCount] = useState();
  useEffect(() => {
    setCartCount(cart?.length);
  }, [cart?.length]);
  return (
    <>
      <View
        style={{
          backgroundColor: props.backgroundColor,
          width: screenWidth,
          height: 0.08 * screenHeight,
          flexDirection: 'row',
        }}>
        {props.headerTitle ? (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            {props.backButton ? (
              <TouchableOpacity
                onPress={props.onBackButtonPress}
                style={{
                  position: 'absolute',
                  right: 0.02 * screenWidth,
                  left: 0.03 * screenWidth,
                  justifyContent: 'center',
                  height: 0.08 * screenHeight,
                  alignItems: 'center',
                  width: '10%',
                }}>
                <Image
                  source={require('../assets/images/leftArrow.png')}
                  style={{
                    width: 21,
                    height: 21,
                    tintColor: props.backButtonColor,
                  }}
                />
              </TouchableOpacity>
            ) : null}
            <Text
              style={{
                color: props.headerTitleColor,
                fontSize: props.headerTitleSize,
                fontWeight: props.headerTitleWeight,
                fontFamily: props.headerTitleFamily,
                width: 0.8 * screenWidth,
                textAlign: 'center',
              }}
              numberOfLines={1}>
              {props.headerTitle}
            </Text>
            {cart?.length > 0 && props.cartIcon && (
              <View
                style={{
                  backgroundColor: theme.colors.secondary,
                  marginRight: 10,
                  width: 17,
                  height: 17,
                  borderRadius: 17 / 2,
                  position: 'absolute',
                  right: 0.015 * screenWidth,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 9999,
                  top: -5,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: fontSize.verbiage_11,
                    fontWeight: fontWeight[700],
                  }}>
                  {CartCount}
                </Text>
              </View>
            )}
            {props.cartIcon ? (
              <TouchableOpacity
                onPress={props.onPressHeaderCartIcon}
                style={{
                  width: '15%',
                  height: 0.08 * screenHeight,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 10,
                }}>
                <Image
                  style={{
                    width: 0.09 * screenWidth,
                    height: 0.06 * screenWidth,
                  }}
                  source={HeaderCart}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}
      </View>
    </>
  );
};

export default MenuHeader;
