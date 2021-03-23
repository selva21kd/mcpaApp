import { StyleSheet } from 'react-native';
// import { Helpers, Metrics, Fonts } from 'App/Theme';
// import { Colors } from 'App/Theme/Colors';
import {useTheme} from 'react-native-paper';

const useStyles = () => {

    const {colors, sr_colors} = useTheme();

    return StyleSheet.create({
        drawerContainer:{
            paddingTop: 40, paddingHorizontal: 16
        },
        userSection: {
            paddingHorizontal: 0,
        },
        divider: {
            marginVertical: 16,
            height: 1
        },
        avatarImageView: {
            position: 'relative',
            width: 108, height: 108, borderRadius: 54,
        },
        editAvatarIcon: {
            position: 'absolute',
            right: '0%', bottom: '0%',
            width: 36, height: 36, borderRadius: 18, elevation: 8,
            justifyContent: 'center', alignItems: 'center',
            backgroundColor: sr_colors.background.main,
        },
        editIcon: {
            width: '60%', height: '60%', tintColor: sr_colors.blue.main
        },
        userTextSection:{
            paddingLeft: 0
        },
        userNameText: {
            // ...Fonts.subtitle1, 
            letterSpacing: 0.1, fontWeight: '700',
            color: sr_colors.background.main,
            marginTop: 16, marginBottom: 4
        },
        userContactDetailView: {
            flexDirection: 'row',
            justifyContent: 'flex-start', alignItems: 'center', alignContent: 'center',
            marginVertical: 4
        },
        contactIcon: {
            width: 14, height: 14, marginRight: 8
        },
        contactText: {
            // ...Fonts.small, 
            letterSpacing: 0.1, fontWeight: '400', lineHeight: 14,
            color: sr_colors.background.dark
        },
        drawerItem: {
            marginHorizontal: 0, 
            marginVertical: 4, 
            overflow: 'hidden', 
            borderRadius: 4, 
            backgroundColor: 'transparent',
            paddingLeft: 0,
        },
        drawerItemView:{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'flex-start', 
            padding:8,
            paddingLeft: 0,
            width:'100%'
        },
        drawerItemIcon: {
            width: 20, height: 20, marginRight: 12,
        },
        drawerItemText: {
            marginRight: 0, paddingRight: 0, flex: 1
        }
    })
}

export default useStyles;