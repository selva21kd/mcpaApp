import { StyleSheet } from 'react-native';

// const fontType = {
//   light: require('../Assets/Fonts/Roboto-Light.ttf'),
//   medium: require('../Assets/Fonts/Roboto-Medium.ttf'),
//   regular: require('../Assets/Fonts/Roboto-Regular.ttf'),
// }

const size = {
  h1: 80,
  h2: 56,
  h3: 40,
  h4: 32,
  h5: 24,
  h6: 18,
  subtitle1: 16,
  subtitle2: 14,
  subtitle3: 12,
  subtitle4: 13,
  body1: 16,
  body2: 14,
  button: 16,
  caption: 8,
  overline: 8,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  smallMedium: 10,
  extraSmall: 8,
  captionText: 7.5,
}

// export default StyleSheet.create({
export const Fonts = {
  h1: {
    fontSize: size.h1,
    fontWeight: '300',
    fontFamily: 'Roboto'
  },
  h2: {
    fontSize: size.h2,
    fontWeight: '300',
    fontFamily: 'Roboto'
  },
  h3: {
    fontSize: size.h3,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  h4: {
    fontSize: size.h4,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  h5: {
    fontSize: size.h5,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  h6: {
    fontSize: size.h6,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  subtitle1: {
    fontSize: size.subtitle1,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  subtitle2: {
    fontSize: size.subtitle2,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  subtitle3: {
    fontSize: size.subtitle3,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  subtitle4: {
    fontSize: size.subtitle4,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  body1: {
    fontSize: size.body1,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  body2: {
    fontSize: size.body2,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  button: {
    fontSize: size.button,
    fontWeight: '500',
    fontFamily: 'Roboto',
    // textTransform: 'uppercase'
  },
  caption: {
    fontSize: size.caption,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  overline: {
    fontSize: size.overline,
    fontWeight: '400',
    fontFamily: 'Roboto',
    textTransform: 'uppercase'
  },
  input: {
    fontSize: size.input,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  regular: {
    fontSize: size.regular,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  medium: {
    fontSize: size.medium,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  small: {
    fontSize: size.small,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  smallMedium:{
    fontSize: size.smallMedium,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  extraSmall: {
    fontSize: size.extraSmall,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  captionText: {
    fontSize: size.captionText,
    fontWeight: '400',
    fontFamily: 'Roboto'
  },
  normal: {
    fontSize: size.regular,
  },
  title: {
    fontSize: size.input
  }
}
