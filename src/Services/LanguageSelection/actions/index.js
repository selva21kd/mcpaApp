import { ACTION_TYPES } from '../../../Constant/HelperConst/HelperConstant';

export const getAppLanguges = () =>({
    type: ACTION_TYPES.GET_AVL_LANGUAGES_LIST
});

export const selectAppLanguage = (language) =>({
    type: ACTION_TYPES.SELECT_DEFAULT_APP_LANG,
    payload: language
});

