import { put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../../../Constant/actionConstant';
import _ from 'lodash';
import firestore from '@react-native-firebase/firestore';


//Worker Function
function* workGetAppLanguages(action){
    console.log("Am i executing")
    // yield put({type: ACTION_TYPES.GET_AVL_LANGUAGES_PENDING});
    // try{

    //     firestore().collection('app_languages').get().then(val=>{
    //         action.payload = val.docs.map(doc => doc.data());
    //         console.log("AM i still working?")
    //     });
    //     yield put({type: ACTION_TYPES.GET_AVL_LANGUAGES_SUCCESS, payload: action.payload});
        
    // }catch(err){
    //     // yield put({type:ACTION_TYPES.OPEN_SNACKBAR, content: _.get(err, 'response.data.data.validation_msg'), duration: 3000})
    //     yield put({type: ACTION_TYPES.GET_AVL_LANGUAGES_ERROR})
    // }
}

export function* watchGetAppLanguages(){ 
    console.log("Im working")
    takeLatest(ACTION_TYPES.GET_AVL_LANGUAGES_LIST, workGetAppLanguages);
};