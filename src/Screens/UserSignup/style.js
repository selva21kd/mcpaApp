
import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from "../../Constant/ConstantStyles/Metrics";
import { Helpers } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({

    flexContainer: {
        flex: 1
    },
    container: {
        height: "100%",
        width: "100%",
        ...Metrics.horizontalPadding,
        backgroundColor: Colors.light.background.main,
    },

    marginBetween: {
        ...Metrics.tinyVerticalMargin,
    },

    viewContainer: {
        ...Metrics.mediumHorizontalPadding,
        alignContent: "center",
    },


    titleText: {
        ...Fonts.h5,
        ...Metrics.mediumVerticalPadding,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 0,
        letterSpacing: 1.5
    },

    inputFormContainer: {
        ...Metrics.avgVerticalPadding,
        paddingBottom: 0,
        width: "100%",
        height: "100%"
    },

    avatarContainer: {
        ...Helpers.center,
        ...Metrics.verticalPadding
    },

    changeAvatarAbs: {
        position: "absolute",
        width: "50%",
        bottom: "11%",
        right: "27%",
        alignContent: "flex-end"
    },

    transparentBtn: {
        position: "absolute",
        bottom: "0%",
        right: "5%",
        alignContent: "flex-end",
        backgroundColor: Colors.light.primary.lightGrey,
        ...Helpers.center,
        opacity: 0.7,
        height: 40,
        width: 40,
        borderRadius: 50,

    },

    inputContainer: {
        ...Helpers.fullWidth,
        flex: 1,

    },

    paddingBetween: {
        ...Metrics.tinyVerticalPadding
    },

    textInput: {
        backgroundColor: Colors.light.background.veryLightGrey,
        borderRadius: 4,
        height: 36,
        justifyContent: 'center',
        ...Metrics.horizontalPadding,
        ...Metrics.tinyVerticalPadding,
        textAlignVertical: 'center',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0.5,
    },

    helperTextContainer: {
        ...Metrics.horizontalPadding,
    },

    bottomContainer: {
        ...Helpers.fullWidth,
        ...Metrics.avgVerticalPadding,
    },

    bottomBtn: {
        backgroundColor: Colors.light.primary.themeColor,
        ...Helpers.fullWidth,
        alignItems: 'center',
        ...Metrics.verticalPadding,
        borderRadius: 18

    },

    btnLable: {
        ...Fonts.body2,
        color: Colors.light.background.main,
    }

})

export default styles;