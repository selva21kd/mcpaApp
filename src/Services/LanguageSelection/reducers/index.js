import { ACTION_TYPES } from "../../../Constant/actionConstant";
const initialState  = {
    name: null,
    key: null,
    defaultLanguage: 'tamil',
    selectedLanguage: null,
}

export default LanguageSelectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_AVL_LANGUAGES_LIST:
            console.log(action.payload);
        case ACTION_TYPES.GET_AVL_LANGUAGES_PENDING:
            console.log(action.payload);
        case ACTION_TYPES.GET_AVL_LANGUAGES_SUCCESS:
            console.log(action.payload);
        case ACTION_TYPES.GET_AVL_LANGUAGES_ERRORr:
            console.log(action.payload);
        default:
            return state;
    }
};