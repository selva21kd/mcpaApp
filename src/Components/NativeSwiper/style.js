import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from "../../Constant/ConstantStyles/Colors";
import { Fonts } from "../../Constant/ConstantStyles/Fonts";

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: Colors.light.background.main, 
    },

    wrapper: {
        backgroundColor: Colors.light.background.main,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    swiperContent: {
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    swiperImg: {
        flex: 1,
        height: screenHeight,
    },

    dot: {
        width: 8,
        height: 8,
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
