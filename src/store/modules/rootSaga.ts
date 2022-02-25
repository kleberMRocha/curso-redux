import {all} from 'redux-saga/effects';

import pokemon from './pokemon/saga';

export default function* rootSaga():any{
    return yield all([pokemon,]);
}