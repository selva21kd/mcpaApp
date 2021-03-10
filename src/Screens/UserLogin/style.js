
import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from "../../Constant/ConstantStyles/Metrics";
import { Helpers, screenWidth, screenHeight } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: Colors.light.background.main,
    },

    viewContainer: {
        width: screenWidth,
        ...Metrics.avgVerticalPadding,
        ...Metrics.highHorizontalPadding,
    },

    divider: {
        width: screenWidth,
    },

    imgStyle: {
        width: screenWidth,
        height: "35%",
    },
    
    ttlText:{
        ...Fonts.h6,
        ...Metrics.verticalPadding,
        fontWeight: "bold",
        textAlign: "center",
    },

    inputContainer:{
        ...Metrics.verticalPadding
    },

    descText:{
        ...Metrics.tinyVerticalPadding,
        ...Fonts.smallMedium,
        letterSpacing: 1
    },

    mbl_txtInput: {
        ...Fonts.small,
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
    }
});

export default styles;
