import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

    <Stack direction="row" >
      <Button sx={{ ml: '21px', color: '#000', background: '#E8F2D0', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#0B593C', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
  
      <Typography ml="20px" color="#fff" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} my="20px" p="0px" textTransform="capitalize" >
        {exercise.name}
      </Typography>
    
    
  </Link>
); 

export default ExerciseCard;