import React from 'react';
import {View, Image} from 'react-native';
import _ from 'lodash';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import { ROUTE_NAMES } from '../../Constant/actionAndRouteConstant';
import GetStarted from '../../Screens/GetStarted';
// import Ionicons from 'react-native-vector-icons/Ionicons';


const HeaderBackIcon = (props) => {

  const styles = {
    leftItemCircle:{
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    backIcon:{
      width: 14,
      height: 14,
      alignSelf: 'center',
      transform: [{rotate:'90deg'}]
    },
  }

  const RenderBackImage = () => {
    return(
      <View style={styles.leftItemCircle}>
        <Image source={require('../../Assets/Images/Icons/chevron-down/icon.png')} style={styles.backIcon} />
    </View>
    )
  }

  return(
    <HeaderBackButton style={{overflow: 'hidden', borderRadius: 24}} onPress={props.onPress} backImage={()=><RenderBackImage />} />
  )
}



const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {elevation: 0},
  headerTitleStyle:{fontSize: 14, fontWeight:'700', fontFamily:'Roboto', letterSpacing:0.17},
  headerTintColor:'black',
  headerMode: 'none',
  // headerLeft: (props) => <HeaderBackIcon {...props} />,
}
 
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign: 'center', ...headerOptions}} >
      <Stack.Screen name={ROUTE_NAMES.INITIAL_GET_STARTED} component={GetStarted} options={{headerShown:false}} />
      {/* <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{title:'Sign Up'}} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{title:'Login'}} />
      <Stack.Screen name={ROUTE_NAMES.OTP_SCREEN} component={OtpScreen} options={({route})=>({title:_.get(route, 'params.customTitle', 'Login')})} />
      <Stack.Screen name='ApplicationForm' component={ApplicationForm} options={({route})=>({title:_.get(route, 'params.customTitle', 'Application form')})} 
      <Stack.Screen name='OtpScreen' component={OtpScreen} options={{title:'Login'}} />
      <Stack.Screen name='Home from Auth Stack' component={Home} />
      <Stack.Screen name="SuccessSplashScreen" component={SuccessSplashScreen} options={{title: '', headerShown:false}}/> */}
    </Stack.Navigator>
  )
}

export default AuthStack;
