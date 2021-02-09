import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import Swiper from "react-native-swiper";

import styles from './style';


const { height, width } = Dimensions.get('window');

const imgSrc = [
    require('../../Assets/Images/BackgroundImages/initial_scr/img1.jpg'),
    require('../../Assets/Images/BackgroundImages/initial_scr/img2.jpg'),
    require('../../Assets/Images/BackgroundImages/initial_scr/img3.jpg'),
    require('../../Assets/Images/BackgroundImages/initial_scr/img4.jpg'),
    require('../../Assets/Images/BackgroundImages/initial_scr/img5.jpg'),
    require('../../Assets/Images/BackgroundImages/initial_scr/img6.jpeg'),
];

const NativeSwiper = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} autoplayTimeout={3}
                showsPagination={true}
                height={"100%"}
                width={"100%"}
                dotStyle={styles.dot} 
                removeClippedSubviews={true}
                activeDotStyle={StyleSheet.compose(styles.dot, styles.activeDot)}
                loop={true}>
                {imgSrc.map((item, key) => (
                    <View key={key} style={styles.swiperContent}>
                        <Image 
                            source={item} style={styles.swiperImg} resizeMode='contain' />
                    </View>
                ))} 
            </Swiper>
        </View>
    )
}

export default NativeSwiper;