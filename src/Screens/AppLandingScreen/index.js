import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
// import { TextInput, HelperText, Divider } from "react-native-paper";
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import _ from "lodash";
import { useDispatch } from "react-redux"


// import styles from './style';
// import { translate } from "../../Utils/Translator";
// import { Colors } from '../../Constant/ConstantStyles/Colors';
// import { ROUTE_NAMES } from "../../Constant/HelperConst/HelperConstant";
// import { AppTracker } from "../../Utils/AppTracker";
// import { GetDeviceMacAddress } from "../../Utils/GlobalHelperFunction";
// import { GlobalVariables } from '../../Constant/HelperConst/HelperConstant';
import { updateAuthStatus } from "../../Services/UserProfile/actions"

const AppLandingScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            if(!_.isEmpty(_.get(auth(),'currentUser.phoneNumber'))){
                auth().signOut()
            }else{
                console.log("22  ",_.get(auth(),'currentUser.phoneNumber'))
            }
            dispatch(updateAuthStatus(false));
        }, 2000);
        
    }, [])

    return(
        <Text>App Landing Screen</Text>
    )

};

export default AppLandingScreen;