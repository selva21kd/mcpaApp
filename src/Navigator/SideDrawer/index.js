import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Divider, useTheme } from 'react-native-paper';
import _ from 'lodash';
import CustomDrawerList from './DrawerItemList';
import { getVersion } from 'react-native-device-info';

import styles from './style';
import { Colors } from '../../Constant/ConstantStyles/Colors';

const SideDrawer = (props) => {

    const { state, navigation } = props;

    const routes = _.get(state, 'routes', []);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={ styles.contentContainer } style={styles.drawerContainer}>
            <View style={styles.userSection}>
                <Text>Mount Carmel Prayer Assembly</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.padContainer}>
                <CustomDrawerList navigation={navigation} activeIndex={_.get(state, 'index', -1)}
                    routes={routes}
                    activeTintColor={Colors.light.primary.main}
                    inactiveTintColor={Colors.light.background.main}
                    bgColor={Colors.light.background.brownColor}
                    inactiveBgColor={'transparent'} />
            </View>

            <View style={styles.versionContainer}>
                <Text>v -{getVersion()}</Text>
            </View>

        </DrawerContentScrollView>
    )
}

export default SideDrawer;

