import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import {theme} from '../theme';
import {fontSize, fontWeight, screenWidth} from '../theme/common-style';
const InputButtons = React.memo(props => {
  const containerStyle = {
    width: props.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: props.addToCartButtonHeight
      ? props.addToCartButtonHeight
      : 0.08 * screenWidth,
    alignItems: 'center',
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    borderBottomRightRadius: props.borderBottomRightRadius,
    backgroundColor: props.inputButtonsBackgroundColor,
    borderRadius: props.borderRadius,
  };

  const minusBtnContainerStyle = {
    alignItems: 'center',
    width: props.inputButtonContainerWidth
      ? props.inputButtonContainerWidth
      : Platform.isPad
      ? 60
      : 40,
    height: props.addToCartButtonHeight
      ? props.addToCartButtonHeight
      : 0.08 * screenWidth,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: props.inputButtonContainerColor,
    borderRadius: props.borderRadius,
  };

  const plusBtnContainerStyle = {
    alignItems: 'center',
    width: props.inputButtonContainerWidth
      ? props.inputButtonContainerWidth
      : Platform.isPad
      ? 60
      : 40,
    height: props.addToCartButtonHeight
      ? props.addToCartButtonHeight
      : 0.08 * screenWidth,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: props.inputButtonContainerColor,
    borderBottomRightRadius: props.borderBottomRightRadius,
    borderRadius: props.borderRadius,
  };

  return (
    <>
      <View style={containerStyle}>
        <TouchableOpacity
          onPress={props.onPressMinus}
          style={minusBtnContainerStyle}>
          <Image
            source={require('../assets/images/minus.png')}
            style={[
              styles.inputBtnIcon,
              {
                tintColor: props.inputButtonIconColor,
              },
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <TouchableOpacity
          onPress={props.onPressPlus}
          style={plusBtnContainerStyle}>
          <Image
            source={require('../assets/images/plus.png')}
            style={[
              styles.inputBtnIcon,
              {
                tintColor: props.inputButtonIconColor,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </>
  );
});

export default InputButtons;

const styles = StyleSheet.create({
  inputBtnIcon: {
    width: 14,
    height: 14,
  },
  quantity: {
    color: theme.colors.primary,
    fontSize: fontSize.verbiage_medium_14,
    fontWeight: fontWeight[700],
  },
});
