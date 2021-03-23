import { put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import firestore from '@react-native-firebase/firestore';

import { ACTION_TYPES, FIREBASE_DOCUMENT_NAMES } from '../../../Constant/HelperConst/HelperConstant';


//Worker Function
function* workGetSetUserProfile(action){
    yield put({type: ACTION_TYPES.GET_SET_USER_INFO_PENDING});
    try{

        // yield firestore().collection(FIREBASE_DOCUMENT_NAMES.AVAILABLE_APP_LANGUAGES).get().then(val=>{
        //     action.payload = val.docs.map(doc => doc.data());
        // });
        yield put({type: ACTION_TYPES.GET_SET_USER_INFO_SUCCESS, payload: action.payload});
        
    }catch(err){
        yield put({type: ACTION_TYPES.GET_SET_USER_INFO_ERROR})
    }
}

export function* watchGetSetUserProfile(){ 
    yield takeLatest(ACTION_TYPES.GET_SET_USER_INFO, workGetSetUserProfile);
};
