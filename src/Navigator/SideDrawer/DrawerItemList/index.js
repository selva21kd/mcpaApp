import React from 'react';
import { List, useTheme } from 'react-native-paper';
import _ from 'lodash';

import { NAV_MENU_ICONS } from '../../../Constant/HelperConst/HelperConstant';
import NavigationService from '../../../Navigator/rootNavigationService';

const CustomDrawerList = (props) => {

    const { routes, navigation, activeTintColor } = props;

    const theme = useTheme();

    const getActiveStatus = (name) => {
        const currRoute = NavigationService.getCurrentRoute();
        if (!_.isEmpty(currRoute)) {
            return _.isEqual(_.get(currRoute, 'name', ''), name)
        }
    }

    const onClickNavItem = (routeName) => {
        navigation.toggleDrawer();
        if (!getActiveStatus(routeName)) {
            navigation.navigate(routeName);
        }
    }

    if (!_.isEmpty(routes)) {
        return routes.map((route, idx) => {
            const menuName = _.get(route, 'params.menuName');
            const routeName = _.get(route, 'name');
            const activeStyle = getActiveStatus(routeName) ? { backgroundColor: `${activeTintColor}1a` } : {};
            return (
                <List.Item
                    key={idx}
                    title={menuName}
                    onPress={() => { onClickNavItem(routeName); }}
                    style={{ ...activeStyle }}
                    theme={{ ...theme, fontWeight: 'bold' }}
                    left={props => <List.Icon {...props} icon={NAV_MENU_ICONS[menuName]} />}
                />
            )
        });
    }
    else {
        return null;
    }
}

export default CustomDrawerList;