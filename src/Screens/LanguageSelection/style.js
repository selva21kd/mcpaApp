import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from '../../Constant/ConstantStyles/Metrics';
import { Helpers } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background.main,
        height: "100%",
        width: "100%",
        flexDirection: 'column',
        
    },
    imgStyle:{
        width: "100%",
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