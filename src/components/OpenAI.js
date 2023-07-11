import dotenv from "dotenv";

dotenv.config()


// export default function OpenAI() {
  function getQuestion() {

    fetch('https://api.openai.com/v1/engines/davinci/completions', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        'prompt': 'Once upon a time',
        'max_tokens': 50,
        'temperature': 0.7
      })
    })
      .then(response => response.json())
      .then(data => console.log(data.choices[0].text))
      .catch(error => console.error(error));
  }

  getQuestion();
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
