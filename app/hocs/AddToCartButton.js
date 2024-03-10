import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Addtocarticon from '../assets/images/AddrocartIcon.png';
import {screenWidth} from '../theme/common-style';

const AddToCartButton = ({
  onPress,
  borderBottomRightRadius = 20,
  buttonHeight = 0.08 * screenWidth,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderBottomRightRadius,
          height: buttonHeight,
        },
      ]}>
      <Image source={Addtocarticon} style={styles.cartIcon} />
    </TouchableOpacity>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
  },
  cartIcon: {
    height: 0.06 * screenWidth,
    width: 0.12 * screenWidth,
    marginRight: 10,
  },
});
