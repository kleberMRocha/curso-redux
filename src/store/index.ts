import {createStore } from 'redux';
import { IPokemon } from './modules/pokemon/reducer';
import root from './modules/root';

export interface IState {
    pokemon: IPokemon[]
}

export const store = createStore(root);

