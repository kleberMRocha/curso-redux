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

    const addOrRemove = (act: boolean) => {
        const newState = state.map(p => {
            if(p.name === payload.name){
                act ?  p.like+= 1 : p.deslike+= 1
            }
            return p;
        })
        return newState;
    };

    console.log(state);

    switch (type) {
        case 'ADD_POKEMON':
          return [...state, payload]
        case 'LIKE_POKEMON':
          return addOrRemove(true);
        case 'DESLIKE_POKEMON':
            return addOrRemove(false);
        default:
          return state;
      }

};

export default pokemon;