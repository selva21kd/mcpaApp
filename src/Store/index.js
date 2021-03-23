import { combineReducers } from 'redux';

import configureStore from './StoreConfig';
import rootSaga from '../Sagas';
import LanguageSelectionReducer from '../Services/LanguageSelection/reducers';
import UserProfileReducer from "../Services/UserProfile/reducers";

export default () => {
  const rootReducer = combineReducers({
    appLang: LanguageSelectionReducer,
    userProfile: UserProfileReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
