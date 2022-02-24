import {createStore } from 'redux';
import { IPokemon } from './modules/pokemon/reducer';
import root from './modules/root';
import {composeWithDevTools} from 'redux-devtools-extension';
export interface IState {
    pokemon: IPokemon[]
}

export const store = createStore(root, composeWithDevTools());

