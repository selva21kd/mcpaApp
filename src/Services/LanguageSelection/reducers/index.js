import _ from 'loadsh';

import { ACTION_TYPES } from "../../../Constant/HelperConst/HelperConstant";


const initialState  = {
    name: null,
    key: null,
    defaultLanguage: 'tamil',
    selectedLanguageName: null,
    selectedLanguageKey: null,
    avlLanguages: [],
    languageTag: 'tm',
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
        case ACTION_TYPES.SELECT_DEFAULT_APP_LANG:
            return { ...state, 
                defaultLanguage: _.get(action, 'payload.name'), 
                languageTag: _.get(action, 'payload.languageTag'),
                selectedLanguageKey: _.get(action, 'payload.key'), 
                selectedLanguageName: _.get(action, 'payload.name'), 
                
            }
        default:
            return state;
    }
};