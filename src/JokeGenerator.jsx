import React ,{useState,useEffect} from 'react'

  const JokeGenerator = () =>{

    const [Joke, setJoke] = useState('')

    const fetchjoke = async () =>{
      try {
        const response = await fetch ('https://official-joke-api.appspot.com/random_joke')
        const data = await response.json()
        setJoke(`${data.setup}-${data.punchline}`)
      } catch (error) {
        console.error('Error while fetching joke',error)
      }
    }
  

  useEffect(() =>{
   
      fetchjoke()

  },[]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6"> Random Joke Generator</h1>
        <p className="text-xltext-center text-gray-800 mb-4">{Joke || 'Loading'}</p>
        <button
        onClick={fetchjoke}
        className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-md hover:bg-blue-600 transition duration-300"

        > Get Another Joke</button>
    </div>
  );

  }


export default JokeGenerator