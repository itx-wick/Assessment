import React from 'react';
import {View} from 'react-native';
import MenuHeader from '../hocs/MenuHeader';
import {theme} from '../theme';
import {fontSize, fontWeight} from '../theme/common-style';
import {clearCart} from '../redux/reducers/cartSlice';
import CartSection from '../hocs/CartSection';
import {useDispatch} from 'react-redux';

const Cart = props => {
  const dispatch = useDispatch();
  return (
    <>
      <MenuHeader
        backgroundColor={theme.colors.primary}
        headerTitle={'Cart'}
        headerTitleColor={theme.colors.white}
        headerTitleSize={fontSize.title_30}
        headerTitleWeight={fontWeight[500]}
        backButton={true}
        backButtonColor={'white'}
        backButtonSize={25}
        cartIcon={false}
        onBackButtonPress={() => props.navigation.goBack()}
      />

      <View style={{backgroundColor: theme.colors.white}}>
        <CartSection
          onClearPress={() => {
            dispatch(clearCart());
          }}
          navigation={props.navigation}
        />
      </View>
    </>
  );
};

export default Cart;
