import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from '../../Constant/ConstantStyles/Metrics';
import { Helpers, screenWidth, screenHeight } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background.main,
        height: screenHeight,
        width: screenWidth,
        flexDirection: 'column',
        
    },
    imgStyle:{
        width: screenWidth,
        height: "35%",
        paddingBottom: 0,
        marginBottom: 0,
    },
    mainContainer:{
        // justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "100%",
        ...Metrics.horizontalPadding,

    },  
    
    mainHeading:{
        ...Fonts.body1,
        color: Colors.light.primary.textColor,
        letterSpacing: 0.5,
        paddingBottom: "5%",
        ...Metrics.verticalMargin
    },

    btn_menu:{
        ...Metrics.smallVerticalPadding,
        borderColor: Colors.light.primary.themeColor,
        borderWidth: 1,
        ...Helpers.fullWidth,
        marginBottom: "5%",
        borderRadius: 24,
        alignItems: 'center',
    },

    lbl_btn: {
        color: Colors.light.background.brownColor
    },

});

export default styles;