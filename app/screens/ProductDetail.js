import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {theme} from '../theme';
import {
  fontSize,
  fontWeight,
  screenHeight,
  screenWidth,
} from '../theme/common-style';
import AddToCart from '../hocs/AddToCart';
import {numberWithCommas} from '../hocs/NumberWithCommas';
import MenuHeader from '../hocs/MenuHeader';

const ProductDetails = props => {
  const item = props.route.params.productDetail;
  const [productDetails, setProductDetails] = useState(item);

  return (
    <>
      <MenuHeader
        backgroundColor={theme.colors.primary}
        headerTitle={'Product Detail'}
        headerTitleColor={theme.colors.white}
        headerTitleSize={fontSize.title_30}
        headerTitleWeight={fontWeight[500]}
        backButton={true}
        backButtonColor={'white'}
        backButtonSize={25}
        onBackButtonPress={() => props.navigation.goBack()}
        cartIcon={true}
        onPressHeaderCartIcon={() => props.navigation.replace('Cart')}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: theme.colors.white}}>
        <>
          <View
            style={{
              marginTop: 0.07 * screenWidth,
              width: 0.9 * screenWidth,
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/images/productImage.png')}
              style={{width: 0.9 * screenWidth, height: 0.35 * screenHeight}}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  color: theme.colors.primary,
                  fontWeight: fontWeight[700],
                  fontSize: fontSize.verbiage_empty_screen_18,
                  marginVertical: 0.02 * screenWidth,
                  width: 0.6 * screenWidth,
                }}>
                {productDetails?.productName}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  paddingVertical: 4,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: fontSize.verbiage_empty_screen_18,
                    fontWeight: fontWeight[700],
                  }}>
                  {' '}
                  Rs {numberWithCommas(productDetails?.price)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              width: 0.9 * screenWidth,
              alignSelf: 'center',
            }}>
            <AddToCart
              inputButtonContainerWidth={60}
              inputButtonContainerBorderRadius={6}
              inputButtonContainerColor={theme.colors.primary}
              inputButtonIconColor={theme.colors.white}
              isItemAdded={props.isItemAdded}
              quantity={props.checkItemAdded}
              item={productDetails}
              borderWidth={1}
              borderColor={theme.colors.primary}
              borderBottomRightRadius={30}
              paddingHorizontal={props.inputButtonPaddingHorizontal}
              inputButtonsBackgroundColor={props.inputButtonsBackgroundColor}
              addToCartButtonHeight={50}
            />
          </View>
        </>
      </ScrollView>
    </>
  );
};

export default ProductDetails;
