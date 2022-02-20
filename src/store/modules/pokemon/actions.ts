import { IPokemon } from "./reducer";

export const addPokemon  = (pokemon:IPokemon) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }

};