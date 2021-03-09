/**
 * This file contains metric values that are global to the application.
 */

// Examples of metrics you can define:
export const tiny = 5
export const small = tiny * 2 // 10
export const normal = tiny * 3 // 15
export const medium = normal * 2 // 30
export const high = medium * 3 // 60
export const max = normal * 5 // 30

export const Metrics = {
  bottomMargin: {
    marginBottom: normal,
  },
  topMargin: {
    marginTop: normal,
  },
  mediumTopMargin: {
    marginTop: medium,
  },
  mediumBottomMargin: {
    marginBottom: medium,
  },

  tinyVerticalMargin: {
    marginVertical: tiny,
  },
  smallVerticalMargin: {
    marginVertical: small,
  },
  verticalMargin: {
    marginVertical: normal,
  },
  mediumVerticalMargin: {
    marginVertical: medium,
  },
  highVerticalMargin: {
    marginVertical: high,
  },
  highMediumVerticalMargin: {
    marginVertical: high + medium,
  },
  tinyHorizontalMargin: {
    marginHorizontal: tiny,
  },
  smallHorizontalMargin: {
    marginHorizontal: small,
  },
  horizontalMargin: {
    marginHorizontal: normal,
  },
  mediumHorizontalMargin: {
    marginHorizontal: medium,
  },
  highHorizontalMargin: {
    marginHorizontal: max,
  },
  tinyHorizontalPadding: {
    paddingHorizontal: tiny,
  },
  smallHorizontalPadding: {
    paddingHorizontal: small,
  },
  horizontalPadding: {
    paddingHorizontal: normal,
  },
  highHorizontalPadding: {
    paddingHorizontal: normal + normal + normal ,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: medium,
  },


  tinyVerticalPadding: {
    paddingVertical: tiny,
  },
  smallVerticalPadding: {
    paddingVertical: small,
  },
  verticalPadding: {
    paddingVertical: normal,
  },
  avgVerticalPadding:{
    paddingVertical: normal + small,
  },
  mediumVerticalPadding: {
    paddingVertical: medium,
  },
  highVerticalPadding:{
    paddingVertical: medium + medium,
  },
  maxHighPadding:{
    paddingVertical: medium + small,
  },
}
