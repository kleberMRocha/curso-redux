import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi';
import './style.css';
import { addPokemon } from '../store/modules/pokemon/actions';
import { IPokemon } from '../store/modules/pokemon/reducer';

export const Card:React.FC = () => {
    const pokemons = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAddPokemon = useCallback((pokeon:IPokemon) => {
        dispatch(addPokemon(pokeon));
    },[dispatch]);

    return (<div className='card'>
        <span><h2>Bulbasaur</h2></span>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
        <div className='card-type'>
            <span>Grass</span>
            <span>Poison</span>
        </div>
        <div className='card-like-Container'>
            <span><h4>Do you like Pokemon? </h4></span>
            <div className='card-btns'>
            <button type='button' onClick={() => handleAddPokemon({img:'', name: '', type: ''})} >
                <FiThumbsUp color='green' />
            </button>
            <button type='button' onClick={() => handleAddPokemon({img:'', name: '', type: ''})}>
                <FiThumbsDown color='tomato'  />
            </button>
            </div>
        </div>
    </div>);
};