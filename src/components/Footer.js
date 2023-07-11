import React from 'react';
import { Button, Container } from '@mui/material';
import { getFriendQuestion, getNetworkQuestion, getRomQuestion } from './OpenAI';

export default function Footer() {

  const romanceHandler = () => {
    getRomQuestion();
  }

  const friendHandler = () => {
    getFriendQuestion();
  }

  const networkHandler = () => {
    getNetworkQuestion();
  }

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
        onClick={friendHandler}
      >Friend</Button>
      <Button
        variant='contained'
        className='q-button'
        onClick={networkHandler}
      >Network</Button>
      <Button
        variant='contained'
        className='q-button'
        onClick={romanceHandler}
      >Romance</Button>
    </Container>
  )
}
