import React from 'react'
import { Typography, Stack } from '@mui/material';

const Detail = ({exerciseDetail}) => {
    ///OBJECT DE_STRUCTRURING / not to write exerciseDetail.bodyPart or etc every time
    const { gifUrl, name, target } = exerciseDetail;



      return (
        <Stack gap="90px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
          <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
          <Stack sx={{ gap: { lg: '75px', xs: '20px' } , alignItems:'left'}} width='700px'>
            <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} color='#D2D9A0' fontWeight={700} mt='40px' textTransform="capitalize">
              {name}
            </Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#fff" fontWeight='300px'>
              <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
              of the exercises increase the strength and definition of your {target} area. 
              <br/> Let's get moving! 
            </Typography>
          </Stack>
        </Stack>
      );
    };
    
    export default Detail;