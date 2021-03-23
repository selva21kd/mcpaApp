import { all } from 'redux-saga/effects';
import { watchGetAppLanguages } from '../Services/LanguageSelection/sagas';
import { watchGetSetUserProfile } from "../Services/UserProfile/sagas";
export default function* root() {
  yield all([
    watchGetAppLanguages(),
    watchGetSetUserProfile(),
  ])
}
