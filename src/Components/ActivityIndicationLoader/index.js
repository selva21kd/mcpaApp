import React, { useEffect } from 'react';
import { Text, View, BackHandler, StatusBar, Image } from 'react-native';
import { ActivityIndicator, Portal, useTheme, Colors } from 'react-native-paper';
import _ from 'lodash';


import styles from './style';
import { Colors as app_theme_color} from '../../Constant/ConstantStyles/Colors';

const ActivityIndicationLoader = ({
    visible,
    message = 'Please Wait',
    type,
    timeout,
    onClose,
    defaultOnClose,
}) => {

    const { colors } = useTheme();

    let timeoutVar = '';

    useEffect(() => {
        const intervalFxn = () => {
            timeoutVar = setTimeout(
                () => {
                    if (!_.isFunction(onClose)) {
                        defaultOnClose();
                    } else {
                        onClose();
                    }
                },
                timeout ? timeout : 2000,
            );
        };

        if (visible && !_.isEmpty(type)) {
            intervalFxn();
        } else if (!visible) {
            clearTimeout(timeoutVar);
        }
    }, [visible, type]);

    useEffect(() => {
        if (visible) {
            const backAction = () => {
                return true;
            };
            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction,
            );
            return () => backHandler.remove();
        }
    }, [visible]);

    return (
        <Portal>
            {visible ? (
                <View style={styles.loader}>
                    <StatusBar
                        backgroundColor={'rgba(0,0,0,0.52)'}
                        barStyle={'dark-content'}
                    />
                    <View
                        style={{
                            padding: 16,
                            alignSelf: 'center',
                            maxWidth: '80%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: app_theme_color.light.background.main,
                            borderRadius: 8,
                            borderColor: app_theme_color.light.primary.themeColor,
                            borderWidth: 1
                        }}>
                        {_.isEqual(type, 'success') ? (
                            <View
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: Colors.green700,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../Assets/Icons/Tick/icon.png')}
                                    style={{ width: 18, height: 18, tintColor: Colors.green700 }}
                                />
                            </View>
                        ) : _.isEqual(type, 'error') ? (
                            <Image
                                source={require('../../Assets/Icons/Error/icon.png')}
                                style={{ width: 24, height: 24, tintColor: colors.error }}
                            />
                        ) : (
                                    <ActivityIndicator animating={true} color="primary" />
                                )}
                        <Text
                            style={{
                                paddingHorizontal: 16,
                                fontSize: 16,
                            }}>
                            {message}
                        </Text>
                    </View>
                </View>
            ) : null}
        </Portal>
    );
};

export default ActivityIndicationLoader;
