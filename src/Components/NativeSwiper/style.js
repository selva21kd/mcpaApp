import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from "../../Constant/ConstantStyles/Colors";

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: Colors.light.background.main, 
    },

    swiperContent: {
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    swiperImg: {
        flex: 1,
        height: "100%",
    },

});

export default styles;
