import { StyleSheet } from 'react-native';
import { Colors } from '../../Constant/ConstantStyles/Colors';


const styles = StyleSheet.create({
    loader :{
        position : 'absolute', 
        top : 0, 
        left : 0, 
        backgroundColor : '#00000050', 
        flex : 1, 
        width : '100%', 
        height : '100%', 
        zIndex : 99999,
        alignItems : 'center',
        justifyContent : 'center'
    },
    loadIcon :{
        fontSize : 20
    },
    loaderContent:{
        backgroundColor :'#fff',
        width : 50,
        height : 50,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10
    },
    loadingText : { 
        color: Colors.light.primary.dark,
        fontStyle : "italic"
    }
});

export default styles;