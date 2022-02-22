import { IPokemon } from "./reducer";

export const addPokemon  = (pokemon:IPokemon) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }
};

export const likePokesmon  = (pokemon:IPokemon) => {
    return {
        type: 'LIKE_POKEMON',
        payload: pokemon
    }
};


export const deslikePokemon  = (pokemon:IPokemon) => {
    return {
        type: 'DESLIKE_POKEMON',
        payload: pokemon
    }
};