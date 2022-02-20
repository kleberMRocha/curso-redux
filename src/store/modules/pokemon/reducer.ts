import { Reducer } from "redux";

export interface IPokemon{
    name: string,
    type: string,
    img: string,
}
const initialState:IPokemon[] = [] as IPokemon[] ; 

const pokemon:Reducer<IPokemon[]> = (state = initialState, action) => {
    console.log(state, action);
    return initialState;
};

export default pokemon;