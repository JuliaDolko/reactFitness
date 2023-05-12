import React from 'react'
import { Stack, Typography } from '@mui/material';


const BodyPart = ({item, bodyPart, setBodyPart}) => (


    <Stack 
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={
            bodyPart === item ? { 
                border: '5px solid #D2D9A0',
                 background: '#fff', 
                 borderBottomLeftRadius: '20px', 
                 width: '270px', height: '200px', 
                 cursor: 'pointer', gap: '47px'
             } : { background: '#fff', borderRadius: '20px',
                   width: '270px', height: '200px',
                  cursor: 'pointer', gap: '40px' }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >

        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>

)

export default BodyPart