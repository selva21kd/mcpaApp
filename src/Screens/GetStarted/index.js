import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import NativeSwiper from '../../Components/NativeSwiper';
import styles from './style';



const GetStarted = ({navigation}) => {

    return (
        <View>
            <View style={styles.fullHeight}>
                <NativeSwiper showsPagination={true} loop={true} autoPlay={true}/>
                <View style={styles.floatBottomView}>
                    <TouchableOpacity style={styles.floatBtn}>
                        <Text style={styles.actionBtn}>Get's Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GetStarted;
