import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Constant/ConstantStyles/Metrics';
import { Colors } from '../../../Constant/ConstantStyles/Colors';
import { Fonts } from '../../../Constant/ConstantStyles/Fonts';
import { Helpers, screenWidth, screenHeight } from '../../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({
    mainContainer:{
        width: screenWidth,
        height: screenHeight,
        backgroundColor: Colors.light.background.main,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontWeight: "bold",
        color: Colors.light.background.main,
    }
});

export default styles;