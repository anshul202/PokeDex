import { Button, IconButton, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Infobox from "../components/Infobox"
import axios from "axios";


const Pokedex = () => {
  const [PokemonName, setPokemonName] = useState(null);
  const [PokemonList, setPokemonList] = useState([]);
  const [Current, setCurrent] = useState(null)
  const input = useRef(null)
  const fetchpokemonlist=async()=>{
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118");
      setPokemonList(response.data.results);
      console.log(PokemonList)
    }catch(error){
      console.log(error);
    }
  }
  useEffect( ()=>{
    fetchpokemonlist();
  },[])


  return (
    <main>
      <NavLink to="/">
        <Button sx={{ background: "transparent", margin: "0.7rem" }} variant="contained" startIcon={<KeyboardBackspaceIcon />}>Back</Button>
      </NavLink>
      <div className="tw-w-[50%] tw-mx-auto tw-h-[60%] tw-bg-slate-300">
        <nav className="flex">
          <IconButton></IconButton>
          <IconButton></IconButton>
        </nav>
        <div className="tw-grid tw-grid-cols-2 tw-h-[60%]">
          <Infobox Current={Current} />
          <div className="tw-flex tw-flex-col">
          <TextField className="tw-my-2" id="outlined-basic" label="Search Pokemon!" variant="outlined" ref={input}/>
          
          <ul className="tw-list-none tw-scroll-m-1 tw-max-h-40 tw-overflow-y-scroll tw-overflow-x-hidden">
            <div/>
            {PokemonList.map((pokemon,index)=><li className="tw-flex tw-items-center tw-w-full tw-px-4 tw-py-2 tw-border-b tw-bg-gray-200 tw-border-black tw-rounded-t tw-transition-transform hover:tw-scale-110" 
            key={index}
            onClick={()=>{
              setCurrent(pokemon.url)}}
            ><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}/>{pokemon.name}</li>)}
          </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pokedex;
