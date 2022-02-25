import {all, takeLatest} from 'redux-saga/effects';

export default all([
    takeLatest('ADD_POKEMON' , () => console.log('teste'))
]);