import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid var(--secondary-color)' : '',
        backgroundColor: 'var(--primary-color)',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}>
      <img
        src={`../images/${item}.png`}
        alt="dumbbell"
        style={{ width: '100px', height: '100px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="var(--button-text-color)"
        textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
