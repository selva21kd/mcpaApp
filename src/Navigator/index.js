import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../Theme';
import { AppearanceProvider } from 'react-native-appearance';
import { useDispatch } from "react-redux";
import NetInfo from '@react-native-community/netinfo'
import _ from 'loadsh';

import { getAppLanguges } from '../Services/LanguageSelection/actions';
import AuthStack from './Stacks/AuthStack';
import NoInternetConnection from "../Screens/HelperScreens/NoInternetConnection";
import { navigationRef, isReadyRef } from './rootNavigationService';

const Navigator = (props) => {
    const dispatch = useDispatch();
    const netInfoRef = useRef();

    const [isConnected, setIsConnected] = useState(true);

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
                                    <AuthStack handleLocalizationChange={(lang)=>props.handleLocalizationChange(lang)} />
                                    {/* <Drawer.Navigator initialRouteName="Home">
                                            <Drawer.Screen name="Home" component={HomeScreen} />
                                            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                                        </Drawer.Navigator> 
                                    */}
                                </NavigationContainer>
                    :
                    <NoInternetConnection retryInternetConnection = {checkConnectivity} />
                }
            </SafeAreaView>
        </AppearanceProvider>

    )
}

export default Navigator;