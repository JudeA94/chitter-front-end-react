import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Could not fetch the data for that resource')
      }
      return response.json()})
      .then(data => {
        setError(null)
        setData(data)
        setIsPending(false)
      })
      .catch(err => {
        if(err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        setIsPending(false)
        setError(err.message)
      })
    }, [url])
  
  return { data, isPending, error }
  };

  export default useFetch;
