import 'react-native-gesture-handler';
import React from 'react';
import { Text } from "react-native"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import StoreConfig from './src/Store';
import Navigator from './src/Navigator';
import { isPermissionsGranted, cameraPermissionCheck, readStoragePermissionCheck } from "./src/Utils/PermissionChecker"

const { store, persistor } = StoreConfig();
const theme = {
  ...DefaultTheme,
  dark: false,

};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasGlobalPermission: true,
    };
  }

  async componentDidMount() {
    SplashScreen.hide();
    const hasPermissionForAll = await isPermissionsGranted();
    console.log("hasPermissionForAll",hasPermissionForAll)
    if(hasPermissionForAll){
      this.setState({hasGlobalPermission: true})
    }else{
      const cameraAccess = await cameraPermissionCheck();
      const readStorage = await readStoragePermissionCheck();
      if(cameraAccess && readStorage){
        this.setState({hasGlobalPermission: true})
      }else{
        this.setState({hasGlobalPermission: false})
      } 
      
    }
  }

  render() {

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={theme}>
            {
              this.state.hasGlobalPermission ? <Navigator /> : <Text>Please Provide Permission</Text>
            }
          </PaperProvider>
        </PersistGate>
      </Provider>

    )
  }
}

