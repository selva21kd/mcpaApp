import React from 'react';
import { View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import styles from './style';

const OTPInput = (props) => {

    return (
        <View style={styles.container}>
            <OTPInputView
                {...props}
            />
        </View>
    )
}

export default OTPInput;