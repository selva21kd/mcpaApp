import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './rootNavigationService'
import { SafeAreaView, StatusBar, View, Text, Button } from 'react-native'
import { useTheme } from '../Theme'
import { AppearanceProvider } from 'react-native-appearance';
import { MainNavigator } from "../Screens/MainNavigator";



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Navigator = () => {


    const { Layout, NavigationTheme } = useTheme();
    const { colors } = NavigationTheme;
    
    return (
        <AppearanceProvider>
            <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
                 <NavigationContainer ref={navigationRef}>
                    <StatusBar barStyle="dark-content" />
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </AppearanceProvider>
        
    )
}

export default Navigator;