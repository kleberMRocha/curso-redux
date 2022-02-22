import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi';
import './style.css';
import { addPokemon, deslikePokemon,likePokesmon } from '../store/modules/pokemon/actions';
import { IPokemon } from '../store/modules/pokemon/reducer';
import { IState } from '../store';

export const Card:React.FC = () => {
    const pokemons = useSelector<IState, IPokemon[]>(state => state.pokemon);
    const dispatch = useDispatch();

   
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    const mock = {
        img:url, 
        name: 'Bulbasaur', 
        type: 'Grass,Poison', 
        deslike: 0 , 
        like: 0
    };

    const [pokemon, setPokeon] = useState(mock);

    const handleAddPokemon = useCallback((pokeon:IPokemon, action: 'like' | 'deslike') => {
        dispatch(addPokemon(pokeon));
        action === 'like' 
            ? dispatch(likePokesmon(pokeon)) 
            : dispatch(deslikePokemon(pokeon));
    },[dispatch]);
    

    const typeList = pokemon.type.split(',');

    return (<div className='card'>
        <span><h2>{pokemon.name}</h2></span>
        <img src={pokemon.img} />
        <div className='card-type'>
            {
                typeList.map(t => <span key={t}>{t}</span>)
            }
        </div>
        <div className='card-like-Container'>
            <span><h4>Do you like this Pokemon? </h4></span>
            <div className='card-btns'>
            <button type='button' onClick={() => handleAddPokemon(mock, 'like')} >
                <FiThumbsUp color='green' /> {pokemon.like}
            </button>
            <button type='button' onClick={() => handleAddPokemon(mock, 'deslike')}>
                <FiThumbsDown color='tomato'  /> {pokemon.deslike}
            </button>
            </div>
        </div>
    </div>);
};