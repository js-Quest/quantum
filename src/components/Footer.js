import React from 'react';
import { Button, Container } from '@mui/material';

export default function Footer() {
  return (
    <Container maxWidth='100' sx={{
      display: 'flex',
      backgroundColor: '#5B534B',
      position: 'fixed',
      bottom: 0,
      left: 0,
      height: '5em',
      alignItems: 'center',
      justifyContent: 'space-around'

    }} >
      <Button 
      variant='contained' 
      className='q-button'
      >Friend</Button>
      <Button 
      variant='contained' 
      className='q-button'
      >Network</Button>
      <Button 
      variant='contained' 
      className='q-button'
      >Romance</Button>
    </Container>
  )
}
