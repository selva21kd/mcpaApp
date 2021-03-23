import React, { useEffect, useReducer } from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { View, Image } from 'react-native';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as RNLocalize from "react-native-localize";

import { ROUTE_NAMES, NAV_MENUS } from '../../Constant/HelperConst/HelperConstant';
import AppLandingScreen from '../../Screens/AppLandingScreen';
import { Colors } from "../../Constant/ConstantStyles/Colors"
import UserSignup from "../../Screens/UserSignup";
import SideDrawer from '../SideDrawer';
import { setI18nConfig } from '../../Utils/Translator';


const HeaderBackIcon = (props) => {

    const styles = {
        leftItemCircle: {
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        backIcon: {
            width: 14,
            height: 14,
            alignSelf: 'center',
            transform: [{ rotate: '90deg' }]
        },
    }

    const RenderBackImage = () => {
        return (
            <View style={styles.leftItemCircle}>
                <Icon name="arrow-back-ios" size={22} color="#000" />
            </View>
        )
    }

    return (
        <HeaderBackButton style={{ overflow: 'hidden', borderRadius: 24 }} onPress={props.onPress} backImage={() => <RenderBackImage />} />
    )
}

const headerOptions = {
    headerStyle: { elevation: 0, height: 40 },
    headerTitleStyle: { fontSize: 14, fontWeight: '700', fontFamily: 'Roboto', letterSpacing: 0.17 },
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerLeft: (props) => <HeaderBackIcon {...props} />,
    headerShown: false
}

const plainHeaderOptions = {
    headerStyle: { backgroundColor: Colors.light.background.main },
    headerLeft: (props) => <HeaderBackIcon {...props} />,
    headerTransparent: true,
}

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ ...headerOptions }} initialRouteName={ROUTE_NAMES.USER_SIGNUP}>
            <HomeStack.Screen name={ROUTE_NAMES.APP_LANDING_SCREEN} component={AppLandingScreen} />
            <HomeStack.Screen name={ROUTE_NAMES.USER_SIGNUP} component={UserSignup} />
        </HomeStack.Navigator>
    )
}

const AppStack = () => {

    // const appLangTag = useSelector(state => state.appLang.languageTag);
    // const [, forceUpdate] = useReducer([], () => []);

    // useEffect(() => {
    //     const handleLocalizationChange = () => {
    //         setI18nConfig(appLangTag);
    //         forceUpdate();
    //     };

    //     RNLocalize.addEventListener("change", handleLocalizationChange);

    //     return () => {
    //         RNLocalize.removeEventListener("change", handleLocalizationChange);
    //     };
    // }, []);

    return (
        <Drawer.Navigator backBehavior='history' drawerContent={(props) => <SideDrawer {...props} />} screenOptions={{ ...headerOptions }}>
            <Drawer.Screen name={ROUTE_NAMES.APP_LANDING_SCREEN} initialParams={{ menuName: NAV_MENUS.HOME }} component={HomeStackNavigator} options={{ title: 'Home', swipeEnabled: false }} />
        </Drawer.Navigator>
    )
}

export default AppStack;