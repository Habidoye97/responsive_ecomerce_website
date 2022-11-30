import React, { useEffect } from 'react'
import Header from './Components/Header/Header';

export default function App() {

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'af74ccd02cmshca430382404f56ep117880jsnb78ef35251b6',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };
    
    fetch('https://asos2.p.rapidapi.com/products/v3/detail?id=9851612&lang=en-NG&store=NG&sizeSchema=NG&currency=NGN', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='bg-yellow-400'>
      <Header/>
    </div>
  )
}

