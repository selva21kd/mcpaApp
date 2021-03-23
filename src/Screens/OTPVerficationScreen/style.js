import { StyleSheet } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from "../../Constant/ConstantStyles/Metrics";
import { Helpers } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({

    flexContainer:{
        flex: 1
    }, 

    container: {
        ...Helpers.fullWidth,
        height: "100%",
        backgroundColor: Colors.light.background.main,
    },

    bannerContainer: {
        height: "35%",
        ...Helpers.fullWidth,
    },

    imgStyle: {
        height: "100%",
        ...Helpers.fullWidth,
    },

    divider: {
        ...Helpers.fullWidth,
    },

    inputContainer: {
        ...Helpers.fullWidth,
        ...Metrics.verticalPadding,
        ...Metrics.horizontalPadding,
    },

    titleText: {
        ...Fonts.h6,
        fontWeight: "bold",
        textAlign: "center"
    },

    secondaryText: {
        ...Fonts.body2,
        ...Metrics.verticalPadding,
        textAlign: "center",
        paddingBottom: 0,
    },

    boldText: {
        fontWeight: "bold"
    },

    otpContainer: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: Colors.light.background.veryLightGrey,
        ...Metrics.smallVerticalPadding,
        ...Metrics.mediumHorizontalPadding,
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1.5,
        color: Colors.light.primary.themeColor,
        ...Fonts.body1,
        fontWeight: "900",
        borderColor: Colors.light.background.greyTextColor
    },

    underlineStyleHighLighted: {
        color: 'black',
        borderBottomWidth: 2.5,
        color: Colors.light.primary.themeColor,
        borderColor: Colors.light.background.brownColor,
    },

    row: {
        ...Helpers.fullWidth,
        ...Helpers.row,
    },

    column: {
        ...Helpers.column,
    },

    flexEnd: {
        justifyContent: "flex-end"
    },

    centerAlign: {
        ...Helpers.rowCenter,
    },

    paddingBottom: {
        ...Metrics.verticalPadding,
        paddingTop: 0,
    },

    smallText: {
        ...Fonts.small,
    },

    halfWidth: {
        ...Helpers.halfWidth
    },

    paddingTop: {
        paddingTop: "2.5%"
    },

    outlineDisabledBtn: {
        borderWidth: 1,
        borderColor: Colors.light.primary.darkAshColor,
        borderRadius: 10,
        padding: "2%",
    },

    btnRipple: {
        borderWidth: 1,
        borderColor: Colors.light.primary.royalBlue,
        borderRadius: 10,
        padding: "2%",

    },

    textButton: {
        ...Fonts.body2,
        fontWeight: "bold",
        color: Colors.light.primary.themeColor,
    },

    disabledColor:{
        color: Colors.light.primary.darkAshColor
    },

    textButtonWithMetrics: {
        ...Fonts.body1,
        fontWeight: "bold",
        color: Colors.light.primary.themeColor,
        // marginTop:8
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        ...Helpers.fullWidth
    },

    bottomBtn: {
        backgroundColor: Colors.light.primary.themeColor,
        ...Helpers.fullWidth,
        alignItems: 'center',
        ...Metrics.verticalPadding,


    },

    btnLable: {
        ...Fonts.body2,
        color: Colors.light.background.main,
    },

});

export default styles;