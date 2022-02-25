import {createStore, applyMiddleware } from 'redux';
import { IPokemon } from './modules/pokemon/reducer';
import root from './modules/root';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import saga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const meedleware = [sagaMiddleware];

export interface IState {
    pokemon: IPokemon[]
}

export const store = createStore(root, composeWithDevTools(
    applyMiddleware(...meedleware)
));

sagaMiddleware.run(saga);

