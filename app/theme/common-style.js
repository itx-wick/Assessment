import {Dimensions} from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export const fontWeight = {
  400: '400',
  500: '500',
  500: '600',
  600: '700',
  700: '800',
  800: '900',
  bold: 'bold',
};
export const fontSize = {
  title_30: 0.03 * screenHeight,
  verbiage_large_17: 0.017 * screenHeight,
  verbiage_medium_14: 0.014 * screenHeight,
  verbiage_15: 0.015 * screenHeight,
  verbiage_16: 0.016 * screenHeight,
  verbiage_18: 0.018 * screenHeight,
  verbiage_small_12: 0.012 * screenHeight,
  verbiage_13: 0.013 * screenHeight,
  verbiage_extra_small_8: 0.008 * screenHeight,
  verbiage_10: 0.01 * screenHeight,
  verbiage_11: 0.011 * screenHeight,
  verbiage_20: 0.02 * screenHeight,
  verbiage_22: 0.022 * screenHeight,
  verbiage_24: 0.024 * screenHeight,
  verbiage_26: 0.026 * screenHeight,
  verbiage_empty_screen_18: 0.018 * screenHeight,
  screen_title_24: 0.024 * screenHeight,
};
export const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};
