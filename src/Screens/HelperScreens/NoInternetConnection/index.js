import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';


import styles from './style';


const NoInternetConnection = ({ retryInternetConnection }) =>{

    return (
        <View style={styles.mainContainer}>
            <LottieView source={require('../../../Assets/illustrations/noInternet/no-internet.json')} autoPlay loop  style={{width: "100%", }}/>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomBtn} onPress={retryInternetConnection}>
                    <Text style={styles.btnLable}>Retry</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

};

export default NoInternetConnection;