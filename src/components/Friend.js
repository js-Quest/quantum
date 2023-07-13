import React, { useEffect, useState } from 'react';
import API from './Key';

const YourComponent = () => {
  const [completion, setCompletion] = useState("");

  useEffect(() => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';


    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + API
    };

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test!' }],
      temperature: 0.7
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const completion = data.choices[0].message.content;
        setCompletion(completion);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Result:</h1>
      {completion ? <p>{completion}</p> : <p>Loading...</p>}
    </div>
  );
};

export default YourComponent;
