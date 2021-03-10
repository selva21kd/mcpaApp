import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import NativeSwiper from '../../Components/NativeSwiper';
import styles from './style';
import { ROUTE_NAMES } from '../../Constant/HelperConst/HelperConstant'
import NavigationService from "../../Navigator/rootNavigationService"


const GetStarted = () => {

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
                    autoplay={true} autoplayTimeout={5} showsPagination={true}
                    height={"100%"} width={"100%"}
                    removeClippedSubviews={true}
                /> 
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomBtn} onPress={() => NavigationService.navigateAndReset(ROUTE_NAMES.LANGUAGE_SELECTION)}>
                    <Text style={styles.btnLable}>தொடங்குவோம் / Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted;
