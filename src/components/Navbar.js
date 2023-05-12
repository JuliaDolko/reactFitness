import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/heart-rate.png'


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" 
            sx={{ gap: { sm: '100px', xs: '40px' },  mt: { sm: '32px', xs: '20px' }, 
            justifyContent: 'none' }} px="60px ">
      <Link to="/">
      <img src={Logo} alt='logo' style={ 
        {width: '60px', height: '60px', margin: '-10px 20px', position:'absolute' }
       }/>
      </Link>
      
      <Stack
        direction="row"
        gap="50px"
        ml='40px' 
        fontFamily="Alegreya"
        fontSize="25px"
        alignItems="flex-end" >


        <Link to="/" style={
          {textDecoration: 'none',color: '#d4d2d2', borderBottom: '3px solid #24A65C' }
        }>Home</Link>
        <a href="#exercises" style={
          {textDecoration: 'none',color: '#d4d2d2' }
        }>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar 