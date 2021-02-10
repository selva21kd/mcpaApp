import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import NativeSwiper from '../../Components/NativeSwiper';
import styles from './style';
import { ROUTE_NAMES } from '../../Constant/actionAndRouteConstant'



const GetStarted = ({navigation}) => {

    const imgSrc = [
        require('../../Assets/Images/BackgroundImages/initial_scr/img1.jpg'),
        require('../../Assets/Images/BackgroundImages/initial_scr/img2.jpg'),
        require('../../Assets/Images/BackgroundImages/initial_scr/img3.jpg'),
        require('../../Assets/Images/BackgroundImages/initial_scr/img4.jpg'),
        require('../../Assets/Images/BackgroundImages/initial_scr/img5.jpg'),
        require('../../Assets/Images/BackgroundImages/initial_scr/img6.jpeg'),
    ];

    return (
        <View>
            <View style={styles.fullHeight}>
                <NativeSwiper imgSrc={imgSrc} 
                    style={styles.wrapper} 
                    dotStyle={styles.dot} 
                    activeDotStyle={StyleSheet.compose(styles.dot, styles.activeDot)}
                    showsPagination={true} loop={true} autoPlay={true} showsButtons={false} 
                    autoplay={true} autoplayTimeout={3} showsPagination={true}
                    height={"100%"} width={"100%"}  
                    removeClippedSubviews={true}  loop={true}
                        />
                <View style={styles.floatBottomView}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate(ROUTE_NAMES.LANGUAGE_SELECTION)} style={styles.floatBtn}>
                        <Text style={styles.actionBtn}>Get Started / தொடங்கவும்</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GetStarted;
