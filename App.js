import 'react-native-gesture-handler';
import React from 'react';
import { Provider, MapStateToProps, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import StoreConfig from './src/Store';
import Navigator from './src/Navigator';

const { store, persistor } = StoreConfig();
const theme = {
  ...DefaultTheme,
  dark: false,

};

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      setTimeout(() => { SplashScreen.hide() }, 2500);
    } else {
      SplashScreen.hide();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={theme}>
            <Navigator />
          </PaperProvider>
        </PersistGate>
      </Provider>

    )
  }
}

