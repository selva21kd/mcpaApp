import DeviceInfo from 'react-native-device-info';

export const GetDeviceMacAddress = async () => {
    let DeviceMacId = await DeviceInfo.getMacAddress();
    return DeviceMacId;
}
