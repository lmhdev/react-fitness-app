import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px">
      <Typography
        color="var(--primary-color)"
        fontWeight="600"
        fontSize="26px"
        textTransform="uppercase">
        React Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
        color="var(--secondary-color)">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        color="var(--secondary-color)">
        Check out the most effective exercises
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: 'var(--primary-color)',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: '#000',
            borderRadius: '4px',
          }}>
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="var(--primary-color)"
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
          fontSize: '200px',
        }}>
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
