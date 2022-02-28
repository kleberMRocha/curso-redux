import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiThumbsUp, FiThumbsDown,FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './style.css';
import {
  addPokemon,
  deslikePokemon,
  likePokesmon,
} from '../store/modules/pokemon/actions';
import { IPokemon } from '../store/modules/pokemon/reducer';
import { IState } from '../store';
import { api } from '../service';
import { Loader } from './Loader';

export const Card: React.FC = () => {
  const pokemons = useSelector<IState, IPokemon[]>((state) => state.pokemon);

  const dispatch = useDispatch();
  const [pokemon, setPokeon] = useState({} as IPokemon);
  const [numberPokemon, setNumber] = useState(1);

interface IPayLoadPoekon {
    id: number;
    name: string;
    types: { type: { name: string }}[];
    sprites: {
        front_default: string;
    }
}

  const capitalizeFirstLetter = (name:string) => {
  const letters = name.split('');
  return letters.map((l,i) => i === 0 ? l.toUpperCase() : l ).join('');
  };
  const formatPokeon = ({ name, types, sprites, id }:IPayLoadPoekon) => {
    const pokeon: IPokemon = {
        id,
        deslike: 0,
        like: 0,
        img: sprites.front_default,
        name: capitalizeFirstLetter(name),
        type: types
          .map((t: { type: { name: string } }) => t.type.name)
          .join(','),
      };

      return pokeon;
  };

  useEffect(() => {
    const hasPokemon = pokemons.find(p => p.id === numberPokemon);

    if(hasPokemon){
      setPokeon(hasPokemon);
      return;
    }

    api.get(`pokemon/${numberPokemon}`).then((response) => {
      setPokeon(formatPokeon(response.data));
    });
  }, [numberPokemon]);

  const handleAddPokemon = useCallback(
    (pokeon: IPokemon, action: 'like' | 'deslike' | 'next' | 'previous') => {
        setNumber((old) => {
            const next = old+=1;
            return Number(next)
        })
      dispatch(addPokemon(pokeon));
      action === 'like'
        ? dispatch(likePokesmon(pokeon))
        : dispatch(deslikePokemon(pokeon));
    },
    [dispatch]
  );

  const handleNextPrevious = (act:boolean) => {

    if(numberPokemon === 1 && !act){
      return;
    }

    let nPokemon = Number(numberPokemon);
    const next = act ? nPokemon+=1 : nPokemon-=1;

    setNumber(Number(next));
  };

  return (
    <div className="card">
        <div className='selectorContainer'>
            <button type='button' onClick={() => handleNextPrevious(false)}><FiArrowLeft/></button>
            <button type='button' onClick={() => handleNextPrevious(true)}><FiArrowRight /></button>
        </div>
      {pokemon.name ? (
        <>
          <span>
            <h2>{pokemon.name}</h2>
          </span>
          <img src={pokemon.img} />
          <div className="card-type">
            {
                pokemon.type.split(',').map(t => {
                    return <span key={t}>{t}</span>
                })
            }
          </div>
          <div className="card-like-Container">
            <span>
              <h4>Do you like this Pokemon? </h4>
            </span>
            <div className="card-btns">
              <button
                type="button"
                onClick={() => handleAddPokemon(pokemon, 'like')}
              >
                <FiThumbsUp color="green" /> {pokemon.like}
              </button>
              <button
                type="button"
                onClick={() => handleAddPokemon(pokemon, 'deslike')}
              >
                <FiThumbsDown color="tomato" /> {pokemon.deslike}
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
