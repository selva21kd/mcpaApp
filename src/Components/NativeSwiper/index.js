import React from 'react';
import { Image, View } from 'react-native';
import Swiper from "react-native-swiper";

import styles from './style';

const NativeSwiper = (props) => {

    return (
        <View style={styles.container}>
            <Swiper {...props}>
                {props.imgSrc.map((item, key) => (
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