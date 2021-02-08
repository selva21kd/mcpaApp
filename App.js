import 'react-native-gesture-handler'
import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import  StoreConfig from './src/Store'
import  Navigator  from './src/Navigator'
import SplashScreen from 'react-native-splash-screen';
import { getAppLanguges } from "./src/Services/LanguageSelection/actions";
const { store, persistor } = StoreConfig();


export default class App extends React.Component {

    componentDidMount(){
        getAppLanguges();
        if(Platform.OS==='android'){
            setTimeout(() => {SplashScreen.hide()}, 2500);    
        }else{
            SplashScreen.hide();
        }
    }


    render() {
      return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Navigator />
            </PersistGate>
        </Provider>
       
      )
    }
  }
  
