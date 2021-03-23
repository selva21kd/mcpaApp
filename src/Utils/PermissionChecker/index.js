import { PermissionsAndroid, Alert, BackHandler } from 'react-native';
import { openSettings } from 'react-native-permissions';


export const isPermissionsGranted = async () => {
    const hasCameraPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
    ),
        hasReadStoragePermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );

    const hasAllPermission =
        hasCameraPermission &&
        hasReadStoragePermission

    return hasAllPermission;
};

export const cameraPermissionCheck = async () => {
    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (hasPermission) {
        return true;
    }
    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    }
    if (status === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
            "Permission Required",
            "Provide the access to continue with the applicaiton.",
            [
                {
                    text: "Cancel",
                    onPress: () => BackHandler.exitApp(),
                    style: "cancel"
                },
                { text: "OK", onPress: () => openSettings() }
            ]
        );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
            "Permission Required",
            "Provide the access to continue with the applicaiton.",
            [
                {
                    text: "Cancel",
                    onPress: () => BackHandler.exitApp(),
                    style: "cancel"
                },
                { text: "OK", onPress: () => openSettings() }
            ]
        );
    }
    return false;
};


export const readStoragePermissionCheck = async () => {
    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (hasPermission) {
        return true;
    }
    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    }
    if (status === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
            "Permission Required",
            "Provide the access to continue with the applicaiton.",
            [
                {
                    text: "Cancel",
                    onPress: () => BackHandler.exitApp(),
                    style: "cancel"
                },
                { text: "OK", onPress: () => openSettings() }
            ]
        );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
            "Permission Required",
            "Provide the access to continue with the applicaiton.",
            [
                {
                    text: "Cancel",
                    onPress: () => BackHandler.exitApp(),
                    style: "cancel"
                },
                { text: "OK", onPress: () => openSettings() }
            ]
        );
    }
    return false;
};