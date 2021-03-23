import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, KeyboardAvoidingView, StyleSheet, Keyboard } from 'react-native';
import { TextInput, HelperText, Avatar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from "lodash";
import auth from '@react-native-firebase/auth';



import styles from './style';
import { translate } from "../../Utils/Translator";
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { updateAuthStatus } from "../../Services/UserProfile/actions";
import { isPermissionsGranted } from "../../Utils/PermissionChecker"
// import { ROUTE_NAMES } from "../../Constant/HelperConst/HelperConstant";
// import { AppTracker } from "../../Utils/AppTracker";


const UserSignup = ({ navigation }) => {

    const userDetails = useSelector(state => state.userProfile)
    const dispatch = useDispatch();

    const _fullName = useRef(null);
    const _email = useRef(null);
    const _address1 = useRef(null);
    const _address2 = useRef(null);
    const _city = useRef(null);
    const _state = useRef(null);
    const _pinCode = useRef(null);

    const validationSchema = yup.object().shape({
        fullName: yup.string()
            .required(translate("ValidationMessages.req_fullName")),

        email: yup.string()
            .email(translate("ValidationMessages.invalid_email")),

        address1: yup.string()
            .required(translate("ValidationMessages.req_address")),
        city: yup.string()
            .required(translate("ValidationMessages.req_city")),
        state: yup.string()
            .required(translate("ValidationMessages.req_state")),
        pinCode: yup.string()
            .required(translate("ValidationMessages.req_pincode")),
    });

    const { control, handleSubmit, errors, reset } = useForm({ resolver: yupResolver(validationSchema) });

    const handleUploadDP = () => {
        // auth().signOut();
        // dispatch(updateAuthStatus(false));
        
    }

    const onSubmit = data => {
        console.log("form data", data)
    }

    const renderInputElements = (fieldName, label, keyboardType, defaultValue, isDisabled, returnKeyType, maxLength = 10, ref = null, focusField = null) => {
        return (
            <View style={styles.paddingBetween}>
                <Controller control={control} render={({ onChange, value }) => (
                    <TextInput
                        ref={ref}
                        label={`${translate("InputFieldNames.".concat(fieldName))}`}
                        mode="outlined"
                        disabled={isDisabled}
                        returnKeyType={returnKeyType} dense
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        error={errors[fieldName]}
                        style={{ ...styles.textInput, }}
                        maxLength={maxLength}
                        theme={{ colors: { primary: Colors.light.primary.themeColor, underlineColor: 'transparent' } }}
                        onSubmitEditing={focusField ? () => focusField.current.focus() : Keyboard.dismiss()}
                        value={value}
                        onChangeText={text => onChange(text)}
                    />
                )} name={fieldName} defaultValue={defaultValue ? defaultValue : ""} />
                {errors[fieldName] && <HelperText type='error' visible={true} style={styles.helperTextContainer}>{errors[fieldName]?.message}</HelperText>}
            </View>
        )

    }

    return (
        <SafeAreaView>

            <View style={StyleSheet.compose(styles.container)}>

                <Text style={styles.titleText}> {translate("auth_signup_welcomeText")} </Text>

                <View style={styles.avatarContainer}>
                    <Avatar.Image size={140} source={require("../../Assets/Images/BackgroundImages/initial_scr/img1.jpg")} />
                    <View style={styles.changeAvatarAbs}>
                        <View style={styles.transparentBtn}>
                            <TouchableOpacity onPress={() => handleUploadDP()}>
                                <Icon name={'edit'} size={20} color={Colors.light.primary.textColor} style={styles.icon} />
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>

                <KeyboardAvoidingView style={styles.flexContainer}>

                    <View style={StyleSheet.compose(styles.inputContainer)}>
                        <ScrollView>
                            <>
                                {renderInputElements('fullName', 'Full Name', null, null, null, 'next', 30, _fullName, _email)}
                                {renderInputElements('mobile', 'Mobile Number', null, _.get(userDetails, 'mobile', ''), true, 'next',)}
                                {renderInputElements('email', 'E mail', "email-address", null, null, 'next', 30, _email, _address1)}
                                {renderInputElements('address1', 'Address 1', null, null, null, 'next', 20, _address1, _address2)}
                                {renderInputElements('address2', 'Address 2', null, null, null, 'next', 30, _address2, _city)}
                                {renderInputElements('city', 'City', null, null, null, 'next', 20, _city, _state)}
                                {renderInputElements('state', 'State', null, null, null, 'next', 20, _state, _pinCode)}
                                {renderInputElements('pinCode', 'Pincode', "number-pad", null, null, 'go', 6, _pinCode, null)}
                            </>
                        </ScrollView>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.bottomBtn} onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.btnLable}>{translate("auth_signup_btn_text")}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default UserSignup;