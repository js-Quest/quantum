import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [completion, setCompletion] = useState(null);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const handleStorageChange = () => {
      const newCompletion = window.localStorage.getItem('completion');
      if (newCompletion && newCompletion !== completion) {
        setCompletion(newCompletion);
        setQuestion(newCompletion);
        window.localStorage.removeItem('completion');
      }
    };

    handleStorageChange(); // Update initial completion on component mount

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [completion]);

  return (
    <Container>
      <h1>Result:</h1>
      {question ? <p>{question}</p> : <p>Loading...</p>}
    </Container>
  );
}

