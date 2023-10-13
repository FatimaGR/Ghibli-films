import { useState, useEffect } from 'react'

export function useFetch(request){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch("https://ghibliapi.vercel.app" + request)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) =>  setError(error))
    .finally(() => setLoading(false));
  }, []);
  
  return {data, loading, error};
}