import { combineReducers } from 'redux'
import configureStore from './StoreConfig'
import rootSaga from '../Sagas'
import ThemeReducer  from '../Services/DefaultServices/Theme/reducer/ThemeReducer';
import LanguageSelectionReducer from '../Services/LanguageSelection/reducers';

export default () => {
  const rootReducer = combineReducers({
    theme: ThemeReducer,
    appLang: LanguageSelectionReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
