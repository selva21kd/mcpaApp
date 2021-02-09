import _ from 'loadsh';

import { ACTION_TYPES } from "../../../Constant/actionAndRouteConstant";


const initialState  = {
    name: null,
    key: null,
    defaultLanguage: 'tamil',
    selectedLanguage: null,
    avlLanguages: [],
}


export default LanguageSelectionReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ACTION_TYPES.GET_AVL_LANGUAGES_LIST:
            return {...state};
        case ACTION_TYPES.GET_AVL_LANGUAGES_PENDING:
            return {...state};
        case ACTION_TYPES.GET_AVL_LANGUAGES_SUCCESS:
            return {...state, avlLanguages: _.get(action, 'payload', [])};
        case ACTION_TYPES.GET_AVL_LANGUAGES_ERROR:
            return {...state};
        default:
            return state;
    }
};