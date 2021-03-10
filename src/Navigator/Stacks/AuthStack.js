import React from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import { ROUTE_NAMES } from '../../Constant/HelperConst/HelperConstant';
import { Colors } from '../../Constant/ConstantStyles/Colors'
import GetStarted from '../../Screens/GetStarted';
import LanguageSelection from "../../Screens/LanguageSelection";
import UserLogin from "../../Screens/UserLogin";
import OTPVerficationScreen from "../../Screens/OTPVerficationScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';


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



const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: { backgroundColor: Colors.light.primary.themeColor},
  headerTitleStyle: { fontSize: 14, fontWeight: '700', fontFamily: 'System', letterSpacing: 0.17, fontWeight: 'bold' },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerMode: 'none',
  headerLeft: (props) => <HeaderBackIcon {...props} />,
  // headerBackTitle: '',
  
}

const plainHeaderOptions = {
  headerStyle: { backgroundColor: Colors.light.background.main},
  headerLeft: (props) => <HeaderBackIcon {...props} />,
  headerTransparent: true,
}

function AuthStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center', ...headerOptions }} initialRouteName={ROUTE_NAMES.INITIAL_GET_STARTED}>
      <Stack.Screen name={ROUTE_NAMES.INITIAL_GET_STARTED} component={GetStarted} options={{ headerShown: false, ...headerOptions }} />
      <Stack.Screen name={ROUTE_NAMES.LANGUAGE_SELECTION} component={LanguageSelection} options={{ title: 'Language Selection', headerShown: false, ...headerOptions  }} />
       <Stack.Screen name={ROUTE_NAMES.USER_LOGIN} component={UserLogin} options={{ headerTitle: "", ...plainHeaderOptions }} />
      <Stack.Screen name={ROUTE_NAMES.OTP_VERIFICATION_SCREEN} component={OTPVerficationScreen} options={{ headerTitle: "", ...plainHeaderOptions }} />
      {/*<Stack.Screen name='ApplicationForm' component={ApplicationForm} options={({route})=>({title:_.get(route, 'params.customTitle', 'Application form')})} 
      <Stack.Screen name='OtpScreen' component={OtpScreen} options={{title:'Login'}} />
      <Stack.Screen name='Home from Auth Stack' component={Home} />
      <Stack.Screen name="SuccessSplashScreen" component={SuccessSplashScreen} options={{title: '', headerShown:false}}/> */}
    </Stack.Navigator>
  )
}

export default AuthStack;
