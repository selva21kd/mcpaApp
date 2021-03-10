import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText, Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import _ from "lodash";


import styles from './style';
import { translate } from "../../Utils/Translator";
import { Colors } from '../../Constant/ConstantStyles/Colors';
import { ROUTE_NAMES } from "../../Constant/HelperConst/HelperConstant";
import { AppTracker } from "../../Utils/AppTracker";
import { GetDeviceMacAddress } from "../../Utils/GlobalHelperFunction";
import { GlobalVariables } from '../../Constant/HelperConst/HelperConstant';

const UserLogin = ({ navigation }) => {
    const _mobileRef = useRef(null)

    const validationSchema = yup.object().shape({
        mobileNo: yup.string()
            .required(translate("auth_mbl_required"))
            .min(10, translate("auth_mbl_min_max"))
            .max(10, translate("auth_mbl_min_max"))
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, translate("auth_mbl_invalid")),
    });

    useEffect(() => {
        _mobileRef.current.focus();
    }, []);

    const { control, handleSubmit, errors, reset } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = async data => {
        
        AppTracker(['firebase', 'userLoginDetails', {
            macAddress: await GetDeviceMacAddress(),
            mobileNumber: GlobalVariables.countryCode.concat(_.get(data, 'mobileNo')),
        }]);

        navigation.navigate(ROUTE_NAMES.OTP_VERIFICATION_SCREEN, { mobileNo: _.get(data, 'mobileNo') })
    };

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Image source={require('../../Assets/illustrations/Authentications/login.jpg')} resizeMode="center" style={styles.imgStyle} />

                <View style={styles.divider}>
                    <Divider />
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.ttlText}>{translate("auth_login")}</Text>
                    <Text style={styles.descText}>{translate("auth_mobile_otp_desc")}</Text>
                    <View style={styles.inputContainer}>
                        
                        <Controller control={control} render={({ onChange, value }) => (
                            <TextInput dense style={styles.mbl_txtInput} mode="outlined"
                                label={translate("auth_mobile_no")}
                                value={value}
                                defaultValue=""
                                onChangeText={text => onChange(text)}
                                ref={_mobileRef}
                                enablesReturnKeyAutomatically={true}
                                keyboardType="number-pad"
                                maxLength={10}
                                theme={{ colors: { primary: Colors.light.primary.themeColor, underlineColor: 'transparent' } }}
                                placeholder={translate("auth_mbl_no_placeholder")}
                                left={<TextInput.Icon name={() => <Icon name={'phone'} size={20} />} />}
                            />
                        )} name={"mobileNo"} defaultValue="" />
                        {errors.mobileNo && <HelperText type='error' visible={true}>{_.get(errors, 'mobileNo.message', '')}</HelperText>}
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.bottomBtn} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.btnLable}>{translate("auth_signin_now")}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAwareScrollView>
    )
}

export default UserLogin;
