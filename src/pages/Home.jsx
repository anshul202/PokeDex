import React from 'react'
import Homeimage from '../assets/homescreenicons/pokehome.webp'  
import Button from '@mui/material/Button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Abilities from './Abilities';
import { NavLink } from 'react-router-dom';



const Home = () => {
  const array=[{name:'Pokedex',path:'/pokedex'},{name:'Items',path:'/items'},{name:'Moves',path:'/moves'},{name:'Locations',path:'/locations'},{name:'Abilities',path:'/abilities'},{name:'Types',path:'/types'},{name:'Gymleaders',path:'/Gymleaders'}];

  return (
    <div className='flex'>
        <NavLink to='/'><Button sx={{'background':"transparent",'margin':'0.7rem'}} variant='contained' startIcon={<KeyboardBackspaceIcon/>}>Back</Button></NavLink> 
        <div className="tw-flex tw-justify-center tw-mt-4">    
        <img src={Homeimage} alt="logo" className="tw-object-cover tw-rounded-3xl" />
      </div>
      <div className='tw-mx-auto tw-grid tw-gap-2 tw-w-[50%] tw-md:tw-container grid tw-grid-cols-2 tw-gap-y-5'>
        {array.map((items,index)=>
          <NavLink key={index} className={'tw-flex tw-justify-center'} to={`${items.path}`} >
            <Button size='large' variant='contained'>{items.name}</Button>
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Home