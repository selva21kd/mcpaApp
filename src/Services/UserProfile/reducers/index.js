import _ from 'lodash';

import { ACTION_TYPES } from "../../../Constant/HelperConst/HelperConstant";


const initialState = {
    name: "",
    email: "",
    mobile: "",
    userType: "",
    isAuthenticated: false,
    address1: "",
    address2: "",
    city: "",
    state: "",
    pinCode: "",
}


export default UserProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ACTION_TYPES.CHANGE_AUTH_STATUS:
            return { ...state, isAuthenticated: _.get(action, 'payload', false)}

        case ACTION_TYPES.GET_SET_USER_INFO:
            return { ...state }

        case ACTION_TYPES.GET_SET_USER_MOBILE: 
            return { ...state, mobile: _.get(action, 'payload', '')}

        default:
            return state;
    }
};