import DeviceInfo from 'react-native-device-info';
import _ from 'lodash';

export const GetDeviceMacAddress = async () => {
    let DeviceMacId = await DeviceInfo.getMacAddress();
    return DeviceMacId;
}

export const mobileNumberFormatter = (mobileNo) => {
    if(!_.isEmpty(mobileNo) && _.toString(mobileNo).length===10){
        var i = 0, phone = _.toString(mobileNo);
        return '### ## #####'.replace(/#/g, _ => phone[i++]);
    }else{
        return '';
    }
}