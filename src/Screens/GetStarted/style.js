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
        width: "50%",
        height: "100%",
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8      
    },

    actionBtn:{
        ...Fonts.h6,
        fontWeight: 'bold',
        color: Colors.light.primary.royalBlue
    }
});


export default styles;

