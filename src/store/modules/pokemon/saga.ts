import {all, takeLatest} from 'redux-saga/effects';

export default all([
    takeLatest('ADD_POKEMON' , function* (action){
         yield console.log(action);
    })
]);