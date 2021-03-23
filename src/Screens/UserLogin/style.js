
import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from "../../Constant/ConstantStyles/Metrics";
import { Helpers } from "../../Constant/ConstantStyles/Helpers";

const styles = StyleSheet.create({

    container: {
        height: "100%",
        width: "100%"
    },

    flexContainer: {
        flex: 1
    },

    fullHeight:{
        ...Helpers.fullWidth,
        backgroundColor: Colors.light.background.main,
        flex: 1

    },

    viewContainer: {
        ...Helpers.fullWidth,
        ...Metrics.avgVerticalPadding,
        ...Metrics.highHorizontalPadding,
    },

    divider: {
        ...Helpers.fullWidth,
    },

    imgStyle: {
        ...Helpers.fullWidth,
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
        bottom: "0%",
        ...Helpers.fullWidth,
    },

    bottomBtn:{
        backgroundColor: Colors.light.primary.themeColor,
        ...Helpers.fullWidth,
        alignItems: 'center',
        ...Metrics.verticalPadding

    },

    btnLable: {
        ...Fonts.body2,
        color: Colors.light.background.main,
    }
});

export default styles;
