import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {theme} from '../theme';
import {fontSize, fontWeight, shadowStyle} from '../theme/common-style';
import AddToCart from './AddToCart';
import {numberWithCommas} from './NumberWithCommas';
import {screens} from '../config';
const ProductBox = props => {
  return (
    <>
      <View
        style={[
          {
            backgroundColor: theme.colors.white,
            width: props.width,
            borderRadius: 20,
            height: props.height,
            borderBottomLeftRadius: 0,
          },
          shadowStyle,
        ]}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(screens.detail, {
              productDetail: props.item,
            });
          }}>
          <View style={{width: '100%', height: props.imageContainerHeight}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Image
                style={{width: props.imageWidth, height: props.imageHeight}}
                source={props.image}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: 8,
            }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: fontSize.verbiage_empty_screen_18,
                fontWeight: fontWeight[500],
                color: theme.colors.black,
              }}>
              {props.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}>
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: fontSize.verbiage_16,
                fontWeight: fontWeight[500],
              }}>
              Rs. {numberWithCommas(props.price)}
            </Text>
          </View>
        </TouchableOpacity>
        <AddToCart
          inputButtonContainerColor={props.inputButtonContainerColor}
          inputButtonIconColor={props.inputButtonIconColor}
          isItemAdded={props.isItemAdded}
          quantity={props.checkItemAdded}
          item={props.item}
          borderWidth={props.inputButtonBorderWidth}
          borderColor={props.inputButtonBorderColor}
          borderBottomRightRadius={props.inputButtonBorderBottomRightRadius}
          paddingHorizontal={props.inputButtonPaddingHorizontal}
          inputButtonsBackgroundColor={props.inputButtonsBackgroundColor}
          addToCartButtonHeight={props.addToCartButtonHeight}
        />
      </View>
    </>
  );
};

export default React.memo(ProductBox);
