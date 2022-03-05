import React, { useReducer } from "react";
import { api } from "../service";
import './pages.css';

export const HooksExemple:React.FC = () => {

    interface Action {
        type: 'SAVE' | 'CLEAR';
        payload: IInitialState;

    };

    interface IInitialState {
        nome: string;
        type:string;
    }


    const initialState:IInitialState = {nome: '', type:''}; 
    const reducer = (state:IInitialState, action: Action ) => {
        switch (action.type) {
            case 'SAVE':
                state = action.payload;
                return state;
            case 'CLEAR':
                state = initialState;
                return state;
            default:
                return state;
        }
        
    };

    const [state, dispatch] = useReducer(reducer,initialState);
   
    return (
        <main className="pages-main">
            <header className="pages-header">
                <h1>Exemplos Hooks</h1>
            </header>
            <article>
                <h2>useReducer</h2>
                <fieldset className="pokemon-main">
                    <title>Pokemon</title>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="type"  />
                    <button type="button" onClick={() => dispatch({type: 'SAVE', payload: {nome:'Ditto',type:'Normal'}})}>Salvar</button>
                    <button type="button" onClick={() => dispatch({
                        type:'CLEAR', payload: initialState
                    })}>Limpar</button>
                </fieldset>

                <p>Nome: {state.nome}</p>
                <p>Tipo: {state.type}</p>
            </article>
        </main>
    )
};