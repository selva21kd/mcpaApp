import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Keyboard, InteractionManager, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from "react-redux"
import { Divider, TouchableRipple } from "react-native-paper";
import auth from '@react-native-firebase/auth';
import _ from "lodash";
import { useIsFocused } from '@react-navigation/native';

import styles from './style';
import { translate } from "../../Utils/Translator";
import { GlobalVariables, ROUTE_NAMES } from '../../Constant/HelperConst/HelperConstant';
import OTPInput from "../../Components/OTPInput";
import ActivityIndicationLoader from "../../Components/ActivityIndicationLoader";
import { updateAuthStatus } from "../../Services/UserProfile/actions"
import { Colors } from "../../Constant/ConstantStyles/Colors";
import { AppTracker } from "../../Utils/AppTracker";
import { mobileNumberFormatter } from "../../Utils/GlobalHelperFunction"


const OTPVerficationScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const langTag = useSelector(state => state.appLang.languageTag)
    const mobileWithCountryCode = GlobalVariables.countryCode.concat(_.get(route, 'params.mobileNo'));
    const [OTP, setOTP] = useState("");
    const [user, setUser] = useState();
    const [confirm, setConfirm] = useState(null);
    const [secs, setSecs] = useState(35);
    const [loaderProps, setLoaderProps] = useState({ visible: false, message: 'Please wait...', type: 'animating' })


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        signInWithPhoneNumber(mobileWithCountryCode);
        return subscriber;
    }, [])

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            Keyboard.dismiss();
        });
    }, [isFocused]);

    useEffect(() => {
        const timerCountdown = setInterval(() => {
            if (secs <= 0) {
                clearInterval(timerCountdown);
            } else {
                setSecs(sec => sec - 1)
            }
        }, 1000)
        return () => clearInterval(timerCountdown);
    }, [secs])

    const onAuthStateChanged = (user) => {
        setUser(user);
    }

    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const confirmCode = async () => {
        setLoaderProps({ visible: true, message: translate("auth_loader_validatingOtp"), type: '' })
        try {
            await confirm.confirm(OTP);
            AppTracker(['firebase'], 'UserOTPVerified', {
                mobileNumber: mobileWithCountryCode,
                OTPValue: OTP,
            });
            AppTracker(['firebase'], 'login', {
                mobileNumber: mobileWithCountryCode,
            }, 'login');
            let resp = await setLoaderProps({ visible: true, message: translate("auth_loader_validatedOTP"), type: 'success', timeout: 700, onClose: () => { setLoaderProps({ visible: false, message: '' }); } })
            dispatch(updateAuthStatus(true));
        } catch (error) {
            setLoaderProps({ visible: true, message: translate("auth_loader_otpValidationError"), type: 'error', timeout: 700 });
        }
    }

    const handleResendOTP = () => {
        signInWithPhoneNumber(mobileWithCountryCode);
        setSecs(35);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.flexContainer}>
                <View style={styles.flexContainer}>
                    <View style={styles.bannerContainer}>
                        <Image source={require('../../Assets/illustrations/Authentications/otpScreen.jpg')} resizeMode="center" style={styles.imgStyle} />
                    </View>
                    <View style={styles.divider}>
                        <Divider />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.titleText}>{translate("auth_otp_verify_title")}</Text>

                        <Text style={styles.secondaryText}>{translate("auth_otp_sent_text")} {GlobalVariables.countryCode} <Text style={styles.boldText}>{mobileNumberFormatter(_.get(route, 'params.mobileNo'))}</Text> </Text>

                        <View style={StyleSheet.flatten([styles.row, styles.centerAlign, styles.paddingBottom])}>
                            <Text> {translate("or")} </Text>
                            <TouchableRipple onPress={() => navigation.navigate(ROUTE_NAMES.USER_LOGIN)} rippleColor="rgba(0, 0, 0, .32)">
                                <Text style={styles.textButtonWithMetrics}>{translate("auth_change_mbl_number")}</Text>
                            </TouchableRipple>
                        </View>

                        <View style={{ paddingBottom: 20, marginBottom: 0 }}>
                            <OTPInput
                                autoFocusOnLoad
                                style={styles.otpContainer}
                                pinCount={6}
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code) => {
                                    setOTP(code);
                                }}
                            />
                        </View>
                        <View style={StyleSheet.compose(styles.row, styles.flexEnd)}>
                            <Text style={StyleSheet.compose(styles.smallText, styles.paddingTop)}>{translate("auth_otp_resent_text")}  </Text>
                            <TouchableRipple style={secs === 0 ? StyleSheet.compose(styles.btnRipple) : StyleSheet.compose(styles.outlineDisabledBtn)} onPress={() => handleResendOTP()} rippleColor="rgba(0, 0, 0, .32)">
                                <Text style={secs === 0 ? styles.textButton : { ...styles.textButton, ...styles.disabledColor }}>{secs > 0 ? langTag === "en" ? translate("auth_resend_otp_btn").concat(" In ", secs) : translate("auth_resend_otp_btn").concat(" ", secs) : translate("auth_resend_otp_btn")}</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                   
                    <ActivityIndicationLoader {...loaderProps} defaultOnClose={() => setLoaderProps({ visible: false, message: '', type: '' })} />
                </View>
                <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            style={OTP.length >= 6 ? styles.bottomBtn : { ...styles.bottomBtn, backgroundColor: Colors.light.background.greyTextColor }}
                            disabled={OTP.length >= 6 ? false : true}
                            onPress={OTP.length >= 6 ? () => confirmCode() : {}}
                        >
                            <Text style={styles.btnLable}>{translate("auth_btn_verify_proceed")}</Text>
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default OTPVerficationScreen;
