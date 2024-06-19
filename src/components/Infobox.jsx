import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Infobox = ({ Current }) => {
  const [pokemonObj, setPokemonObj] = useState({});

  const fetchResults = async (curr) => {
    if (curr) {
      console.log("Fetching data for Pokemon ID:", curr);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${curr}`);
        if (response.status === 200) {
          setPokemonObj(response.data);
          console.log("Fetched data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    console.log("Infobox useEffect triggered with current:", Current);
    fetchResults(Current);
  }, [Current]);

  return (
    <div className='tw-flex tw-flex-col tw-items-center'>
      <div className=''>
        <img
          className='tw-border-2 tw-rounded-xl tw-border-black tw-bg-slate-200 tw-max-h-40 tw-max-w-30'
          src={Current ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Current}.png` : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'}
          alt={pokemonObj.name || 'default'}
        />
        <p className='tw-text-center tw-text-slate-400 tw-font-medium'>{pokemonObj.name}</p>
      </div>
      <div>
        <li className='tw-list-none'><span>Species :</span><p>{pokemonObj.name}</p> </li>
        <li className='tw-list-none'><span>Height :</span><p>{pokemonObj.height}</p> </li>
        <li className='tw-list-none'><span>Weight :</span><p>{pokemonObj.weight}</p> </li>
        <li className='tw-list-none'><span>Abilities :</span>
        {pokemonObj.abilities && Array.from(pokemonObj.abilities).map((element,index)=>(<p key={index}>{element.ability.name}</p>))
        }</li>
      </div>
      <div className='basestates'>
        <li className='tw-list-none'><span>Base Experience :</span><p></p> </li>
        <li className='tw-list-none'><span>Base HP :</span><p></p> </li>
        <li className='tw-list-none'><span>Base Attack :</span><p></p> </li>
        <li className='tw-list-none'><span>Base Defense :</span><p></p> </li>
        <li className='tw-list-none'><span>Base Speed :</span><p></p> </li>
        <li className='tw-list-none'><span>Base Special Attack :</span><p></p> </li>
        <li className='tw-list-none'><span>Base Special Defense :</span><p></p> </li>
      </div>
    </div>
  );
};

export default Infobox;
