import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../Theme';
import { AppearanceProvider } from 'react-native-appearance';
import { useSelector, useDispatch } from "react-redux";
import NetInfo from '@react-native-community/netinfo'
import _ from 'loadsh';

import { getAppLanguges } from '../Services/LanguageSelection/actions';
import AuthStack from './Stacks/AuthStack';
import AppStack from './Stacks/AppStack';
import NoInternetConnection from "../Screens/HelperScreens/NoInternetConnection";
import { navigationRef, isReadyRef } from './rootNavigationService';
import { setI18nConfig } from "../Utils/Translator"

const initialCallAfterStackChange = (val) => {
    setI18nConfig(val)
}

const Navigator = (props) => {
    const dispatch = useDispatch();
    const netInfoRef = useRef();

    const isAuthenticated = useSelector(state=> state.userProfile.isAuthenticated);
    const [isConnected, setIsConnected] = useState(true);
    const appLangTag = useSelector(state=> state.appLang.languageTag);
    initialCallAfterStackChange(appLangTag);

    useEffect(() => {

        if (!_.isEmpty(navigationRef.current) && isReadyRef.current === false) {
            isReadyRef.current = true;
        }

        netInfoRef.current = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected && state.isInternetReachable);
        });

        dispatch(getAppLanguges());

        return () => {
            isReadyRef.current = false;
            if (_.isFunction(netInfoRef.current)) {
                netInfoRef.current();
            }
        };

    }, [])

    const checkConnectivity = () => {
        if (netInfoRef.isConnected && netInfoRef.isInternetReachable) {
            setIsConnected(true);
        }
    };

    const { Layout, NavigationTheme } = useTheme();
    const { colors } = NavigationTheme;

    return (
        <AppearanceProvider>
            <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
                {
                    isConnected ? <NavigationContainer ref={navigationRef} onReady={() => { isReadyRef.current = true }}>
                                    <StatusBar barStyle="light-content" />
                                    {
                                        isAuthenticated ? <AppStack handleLocalizationChange={(lang)=>props.handleLocalizationChange(lang)} /> 
                                            :
                                        <AuthStack handleLocalizationChange={(lang)=>props.handleLocalizationChange(lang)} />
                                    }
                                </NavigationContainer>
                    :
                    <NoInternetConnection retryInternetConnection = {checkConnectivity} />
                }
            </SafeAreaView>
        </AppearanceProvider>

    )
}

export default Navigator;