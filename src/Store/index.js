import { combineReducers } from 'redux';

import configureStore from './StoreConfig';
import rootSaga from '../Sagas';
import LanguageSelectionReducer from '../Services/LanguageSelection/reducers';

export default () => {
  const rootReducer = combineReducers({
    appLang: LanguageSelectionReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
