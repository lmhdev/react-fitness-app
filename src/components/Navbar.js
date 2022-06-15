import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: '122px', sx: '40px' },
        mt: { sm: '32px', xs: '20px' },
      }}
      px="20px">
      <Link to="/">
        <img
          alt="logo"
          src={Logo}
          style={{
            width: '100px',
            height: '100px',
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'var(--primary-color)',
            borderBottom: '1px solid var(--secondary-color)',
          }}>
          Home
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
