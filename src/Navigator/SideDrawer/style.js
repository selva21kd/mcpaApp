
import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../Constant/ConstantStyles/Fonts';
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { Metrics } from "../../Constant/ConstantStyles/Metrics";
import { Helpers } from '../../Constant/ConstantStyles/Helpers';

const styles = StyleSheet.create({
    contentContainer:{
        minHeight: '100%', 
        paddingTop: 40, 
        position: 'relative' 
    },

    userSection: {
        paddingHorizontal: 16,
    },

    divider: {
        marginVertical: 8,
        height: 1
    },

    padContainer:{
        paddingLeft: 0,
        marginBottom: 16 
    },

    versionContainer:{
        position: 'absolute', 
        bottom: 0, 
        right: 0, 
        width: '100%', 
        height: 24, 
        justifyContent: 'center', 
        paddingLeft: 12 
    }

});

export default styles;
