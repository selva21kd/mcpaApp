import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider, TouchableRipple } from "react-native-paper";
import auth from '@react-native-firebase/auth';
import _ from "lodash";
import { AppTracker } from "../../Utils/AppTracker";


import styles from './style';
import { translate } from "../../Utils/Translator";
import { GlobalVariables } from '../../Constant/HelperConst/HelperConstant';
import OTPInput from "../../Components/OTPInput";
import ActivityIndicationLoader from "../../Components/ActivityIndicationLoader";

const OTPVerficationScreen = ({ navigation, route }) => {
    const mobileWithCountryCode = GlobalVariables.countryCode.concat(_.get(route, 'params.mobileNo'));
    const [OTP, setOTP] = useState("");
    const [confirm, setConfirm] = useState(null);
    const [loaderProps, setLoaderProps] = useState({ visible: false, message: 'Please wait...', type: 'animating' })

    useEffect(() => {
        signInWithPhoneNumber(mobileWithCountryCode);
    }, [])

    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const confirmCode = async () => {
        setLoaderProps({visible: true, message: translate("auth_loader_validatingOtp"), type: ''})
        try {
            await confirm.confirm(OTP);
            AppTracker(['firebase', 'UserOTPVerified', {
                mobileNumber: mobileWithCountryCode,
                OTPValue: OTP,
            }]);
            setLoaderProps({visible: true, message: translate("auth_loader_validatedOTP"), type: 'success', timeout: 700, onClose: ()=>{setLoaderProps({visible: false, message:''});}})
        } catch (error) {
            setLoaderProps({visible: true, message: translate("auth_loader_otpValidationError"), type: 'error', timeout: 700});
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image source={require('../../Assets/illustrations/Authentications/otpScreen.jpg')} resizeMode="center" style={styles.imgStyle} />
            </View>
            <View style={styles.divider}>
                <Divider />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.titleText}>{translate("auth_otp_verify_title")}</Text>
                <Text style={styles.secondaryText}>{translate("auth_otp_sent_text")} {GlobalVariables.countryCode} - <Text style={styles.boldText}>{_.get(route, 'params.mobileNo')}</Text></Text>
                <View style={{ paddingBottom: 20, marginBottom: 0 }}>
                    <OTPInput
                        style={styles.otpContainer}
                        pinCount={6}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code) => {
                            setOTP(code);
                        }}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.smallText}>{translate("auth_otp_resent_text")}  </Text>
                    <TouchableRipple style={styles.btnRipple} onPress={() => signInWithPhoneNumber(mobileWithCountryCode)} rippleColor="rgba(0, 0, 0, .32)">
                        <Text style={styles.textButton}>{translate("auth_resend_otp_btn")}</Text>
                    </TouchableRipple>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomBtn} onPress={() => confirmCode()}>
                    <Text style={styles.btnLable}>{translate("auth_btn_verify_proceed")}</Text>
                </TouchableOpacity>
            </View>
            <ActivityIndicationLoader {...loaderProps} defaultOnClose={()=>setLoaderProps({visible:false, message: '', type: ''})}  />
        </View>
    )
}

export default OTPVerficationScreen;
