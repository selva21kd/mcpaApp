import { combineReducers } from 'redux'
import configureStore from './StoreConfig'
import rootSaga from '../Sagas'
import ThemeReducer  from '../Services/DefaultServices/Theme/reducer/ThemeReducer'

export default () => {
  const rootReducer = combineReducers({
    theme: ThemeReducer
  })

  return configureStore(rootReducer, rootSaga)
}
