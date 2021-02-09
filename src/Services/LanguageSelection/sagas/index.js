import { put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import firestore from '@react-native-firebase/firestore';

import { ACTION_TYPES } from '../../../Constant/actionAndRouteConstant';


//Worker Function
function* workGetAppLanguages(action){
    yield put({type: ACTION_TYPES.GET_AVL_LANGUAGES_PENDING});
    try{

        // yield firestore().collection('app_languages').get().then(val=>{
        //     action.payload = val.docs.map(doc => doc.data());
        // });
        yield put({type: ACTION_TYPES.GET_AVL_LANGUAGES_SUCCESS, payload: action.payload});
        
    }catch(err){
        // yield put({type:ACTION_TYPES.OPEN_SNACKBAR, content: _.get(err, 'response.data.data.validation_msg'), duration: 3000})
        yield put({type: ACTION_TYPES.GET_AVL_LANGUAGES_ERROR})
    }
}

export function* watchGetAppLanguages(){ 
    yield takeLatest(ACTION_TYPES.GET_AVL_LANGUAGES_LIST, workGetAppLanguages);
};
