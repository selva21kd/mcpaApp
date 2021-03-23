import analytics from '@react-native-firebase/analytics';


export const AppTracker = async(medium, eventName,  eventValues = null, reservedEvents = null) => {
    if(!reservedEvents){
        if(medium.includes("firebase")){
            return await analytics().logEvent(eventName, eventValues);
        }
    }
    // else{
    //     if(reservedEvents === "login"){
    //         return await analytics().logLogin();
    //     }
    // }
}
