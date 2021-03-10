import analytics from '@react-native-firebase/analytics';


export const AppTracker = (medium, eventName,  eventValues = null) => {
    if(medium.includes['firebase']){
        return analytics().logEvent(eventName, eventValues)
    }
}
