// import dotenv from "dotenv";
import apiKey from './Key'
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + apiKey
};
function getFriendQuestion() {

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'system', content: "you provide an 'unlocking phrase' question that is engaging for getting to know a new friend." }],
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
      console.log(completion);
      return completion
    })
    .catch(error => {
      console.error(error);
    });
}

function getRomQuestion() {

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'provide a question you would ask a new date' }],
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
      console.log(completion);
    })
    .catch(error => {
      console.error(error);
    });
}
function getNetworkQuestion() {

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'provide a randomized question you would ask a new colleague at a networking conference' }],
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
      console.log(completion);
    })
    .catch(error => {
      console.error(error);
    });
}
export {getFriendQuestion, getNetworkQuestion, getRomQuestion}
  // export function getRomQuestion() {

  //   fetch('https://api.openai.com/v1/engines/davinci/completions', 
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer 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'
  //     },
  //     body: JSON.stringify({
  //       'prompt': 'Once upon a time',
  //       'max_tokens': 50,
  //       'temperature': 0.7
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data.choices[0].text))
  //     .catch(error => console.error(error));
  // }
  // export function getNetworkQuestion() {

  //   fetch('https://api.openai.com/v1/engines/davinci/completions', 
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer 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'
  //     },
  //     body: JSON.stringify({
  //       'prompt': 'Once upon a time',
  //       'max_tokens': 50,
  //       'temperature': 0.7
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data.choices[0].text))
  //     .catch(error => console.error(error));
  // }
  // export function getFriendQuestion() {

  //   fetch('https://api.openai.com/v1/chat/completions', 
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer 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'
  //     },
  //     body: JSON.stringify({
  //       'prompt': 'a question for a new friend would be this',
  //       'max_tokens': 50,
  //       'temperature': 0.7
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data.choices[0].text))
  //     .catch(error => console.error(error));
  // }

  // getQuestion();

  // function OpenaiFetchAPI() {
  //   console.log("Calling GPT3")
  //   var url = "https://api.openai.com/v1/engines/davinci/completions";
  //   var bearer = 'Bearer ' + OPENAI_API_KEY
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': bearer,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "prompt": "Once upon a time",
  //       "max_tokens": 5,
  //       "temperature": 1,
  //       "top_p": 1,
  //       "n": 1,
  //       "stream": false,
  //       "logprobs": null,
  //       "stop": "\n"
  //     })


  //   }).then(response => {

  //     return response.json()

  //   }).then(data => {
  //     console.log(data)
  //     console.log(typeof data)
  //     console.log(Object.keys(data))
  //     console.log(data['choices'][0].text)

  //   })
  //     .catch(error => {
  //       console.log('Something bad happened ' + error)
  //     });

  // }



//   return (
//     <div>OpenAI</div>
//   )
// }
