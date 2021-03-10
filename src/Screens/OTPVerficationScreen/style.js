import { StyleSheet } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from "../../Constant/ConstantStyles/Metrics";
import { Helpers, screenWidth, screenHeight } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: Colors.light.background.main
    },

    bannerContainer: {
        height: "35%",
        width: "100%",
    },

    imgStyle: {
        height: "100%",
        width: "100%",
    },

    divider: {
        width: screenWidth,
    },

    inputContainer: {
        width: "100%",
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
        textAlign: "center"
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

    row:{
        width: "100%",
        ...Helpers.row,
        justifyContent: "flex-end"
    },

    btnRipple:{
        // borderColor: 'red',
        // borderWidth: 0.5
    },

    smallText:{
        ...Fonts.medium,
    },

    textButton:{
        ...Fonts.body1,
        fontWeight: "bold",
        color: Colors.light.primary.themeColor,
    },

    bottomContainer:{
        position: 'absolute',
        bottom: 0,
    },

    bottomBtn:{
        backgroundColor: Colors.light.primary.themeColor,
        width: screenWidth,
        alignItems: 'center',
        ...Metrics.verticalPadding

    },

    btnLable: {
        ...Fonts.body2,
        color: Colors.light.background.main,
    },

});

export default styles;