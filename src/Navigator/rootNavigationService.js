import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

let navigator

/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(routeName, params) {
  if(isReadyRef.current && navigationRef.current){
    navigationRef.current.dispatch(
      CommonActions.navigate({
        name:routeName,
        params,
      })
    )
  }
}

function goBack(routeName) {
  if(isReadyRef.current && navigationRef.current){
    navigationRef.current.dispatch(
      CommonActions.goBack()
    )
  }
}

function getCurrentRoute() {
  if(isReadyRef.current && navigationRef.current){
    return navigationRef.current.getCurrentRoute()
  }
}

function canGoBack() {
  if(isReadyRef.current && navigationRef.current){
    const result = navigationRef.current.canGoBack();
    return result;
  }
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName) {

  if(isReadyRef.current && navigationRef.current){
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes:[{name:routeName}]
      })
    )
  }
}

export default {
  navigate,
  navigateAndReset,
  goBack,
  setTopLevelNavigator,
  getCurrentRoute,
  canGoBack
}
