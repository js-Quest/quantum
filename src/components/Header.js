import React from 'react';
import { Container } from '@mui/material';
import Logo from '../ccNoBG.png';

export default function Header() {
  return (
    <Container maxWidth='100' sx={{
      display: 'flex',
      backgroundColor: '#5B534B',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '4em',
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <img src={Logo} className='logo' alt='Logo' sx={{
        height: '100px',
        width: '50px'
      }}
      /> 
      <h2>ConnectionCode.AI</h2>
    </Container>
  )
}
