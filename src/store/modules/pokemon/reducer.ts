import { Reducer } from "redux";

export interface IPokemon{
    name: string,
    type: string,
    img: string,
    like: number,
    deslike: number
}

export type IActions = 'ADD_POKEMON' | 'LIKE_POKEMON' | 'DESLIKE_POKEMON' ;

const initialState:IPokemon[] = [] as IPokemon[] ; 

const pokemon:Reducer<IPokemon[]> = (state = initialState, action) => {
    const {type, payload } = action;

    const handleLikes = (act: boolean) => {
        const newState = state.map(p => {
            const { name } = payload;
            if(p.name === name){
                act ?  p.like+= 1 : p.deslike+= 1
            }
            return p;
        })
        return newState;
    };

    const handleAdd = (pokemon:IPokemon) => {
      const hasPokemon = state.find(p => p.name === pokemon.name);
      if(!hasPokemon){
        return [...state, pokemon]
      }
      return state;
    };

    switch (type) {
        case 'ADD_POKEMON':
          return handleAdd(payload);
        case 'LIKE_POKEMON':
          return handleLikes(true);
        case 'DESLIKE_POKEMON':
            return handleLikes(false);
        default:
          return state;
      }

};

export default pokemon;