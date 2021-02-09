import { all } from 'redux-saga/effects';
import { watchGetAppLanguages } from '../Services/LanguageSelection/sagas';

export default function* root() {
  yield all([
    watchGetAppLanguages(),
  ])
}
