/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

export const Colors = { 
  light: {
    primary: {
      main: '#FEDBD0',
      dark: '#DAB3A7',
      textColor: '#452C2E',
      grey : '#8F8E8E',
      darkGrey : '#7C808B',
      darkShadow: '#626262',
      textGrey : '#434157',
      lightGrey : '#BEC3D1',
      mediumAsh:"#5E5E5E",
      darkAshColor: "#9BA1AF",
      royalBlue: "#003a91",
    },
    secondary: {
      main: '#452C2E',
      dark: '#2C0f11',
      textColor: '#FFFFFF'
    },
    background: {
      main: '#FFFFFF',
      textColor: '#000000',
      greyTextColor: '#7C808B',
      brownColor: "#69442d",
      global: "#FEDBD0",
      veryLightGrey: '#F9F9F9'
    },
    surface: {
      main: '#FFF0E8',
      dark: '#DAC9C3',
      textColor: '#452C2E',
    },
    error: {
      lightColor: '#E25141',
      main: '#E00A0A',
      textColor: '#FFFFFF'
    },
    borderRadius: 8,
    buttonHeight: {
      large: 32,
      medium: 24,
      small: 16
    },
    blue : {
      main : '#39BDC8'
    },
    transparent: 'rgba(0,0,0,0)',
    disabled: 'rgba(54,57,59,0.25)',
    greyText: '#7C808B',
    greyVariant: {
      background: "#F6F6F6",
    },
    modalBackdrop: 'rgba(170, 170, 170, 0.7)',
    borderVariant:{
      lightAsh: "#E1E0E3",
      mediumAsh:"#5E5E5E",
    },
  }
}

export default {...Colors.light,
  transparent: 'rgba(0,0,0,0)',
  // Example colors:
  white: '#ffffff',
  text: '#212529',
  primary: '#007bff',
  success: '#28a745',
  error: '#dc3545',
  overlay: '#CCCDCE',
  btnBackground: '#FEDBD0',
  black : '#484451',
  dark : '#000000',
  darkBlack: '#202020',
  lightGray: '#c4c4c4',
  grey : '#8F8E8E',
  lightGray: "#948EA2",

}
