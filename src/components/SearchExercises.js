import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
const [search, setSearch] = useState('');

const [bodyParts, setBodyParts]= useState([]);

  //to fetch the categories 
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData()
  },[])


// managing the SEARCH field 

const handleSearch = async () => {
  if(search) {
  const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

  const searchedExercises = exercisesData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search)
    || exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
  )
  setSearch('')
  setExercises(searchedExercises);
  }
};

//RETURN JSX 

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography 
        color="#d4d2d2"
        fontSize={{lg:'30px', xs: '20px'}}
        fontWeight={300} mb='50px' textAlign="left" > 
       Let's go back to a results-based approach.<br/> Let's go back to basics. Find the best exercises below:  </Typography> 
        <Box position="relative" mb="70px">
         <TextField
         sx={{
            input:{fontWeight:'400', border:'none', borderRadius:"4px"},
            width:{lg:'800px', xs: '350px'},
            backgroundColor:'#fff',
            borderRadius:'80px'
          }}
          height="76px"  
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search exercises'
          type='text'
          />
        <Button className='search-btn'
          sx={{
            bgcolor:'#0B593C', color:"#d4d2d2", textTransform: 'none',
            border: "1px solid #fff" ,
             width: {lg: '160px', xs:'80px'}, 
             fontSize: {lg:'20px', xs: '14px'}, 
             height: '56px', ml: '10px',
             position:'relative',
             right: '0'
          }}
          onClick={handleSearch}
          >
          Search
        </Button>
        </Box>
        <Box sx={{ position:'relative', width: '100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises