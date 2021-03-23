import { ACTION_TYPES } from '../../../Constant/HelperConst/HelperConstant';

export const getUserInfo = (userInfo) =>({
    type: ACTION_TYPES.GET_SET_USER_INFO,
    payload: userInfo
});


export const updateAuthStatus = (authStatus) =>({
    type: ACTION_TYPES.CHANGE_AUTH_STATUS,
    payload: authStatus
});

export const setUserMobile = (mobileNo) => (
    {
        type: ACTION_TYPES.GET_SET_USER_MOBILE,
        payload: mobileNo
    }
)
