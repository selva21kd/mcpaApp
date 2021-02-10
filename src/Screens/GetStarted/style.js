import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    fullHeight: {
        height: screenHeight
    },

    floatBottomView: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        bottom: "20%",
        // height: "20%"
    },

    floatBtn: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9   
    },

    actionBtn:{
        ...Fonts.h6,
        fontWeight: 'bold',
        color: Colors.light.primary.royalBlue
    },

    wrapper: {
        backgroundColor: Colors.light.background.main,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dot: {
        width: 7,
        height: 7,
        borderRadius: 6,
        marginLeft: 4,
        marginRight: 4,
        backgroundColor: Colors.light.primary.darkAshColor,
    },
    activeDot: {
        width: 12,
        height: 12,
        backgroundColor: Colors.light.background.main,
    },

});


export default styles;

