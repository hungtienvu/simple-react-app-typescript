import { useState, useEffect, ErrorInfo } from 'react'

export const API_ENDPOINT = "https://jsonplaceholder.typicode.com/"

export const useFetch = (url) => {

   const [data, setData] = useState<any>()
   const [loading, setLoading] = useState<boolean>(false)
   const [error, setError] = useState<any>()

    useEffect(() => {
      fetch(API_ENDPOINT + url)
        .then((response) => {
          setLoading(true);
          if (response.ok) return response.json();
          else {
            setLoading(false);
            throw new Error("Cannot fetch data right now :(");
          }
        })
        .then((json) => {
          setLoading(false);
          setData(json);
        })
        .catch((error) => {
          setError(error);
        });
    }, []);

   return { data, loading, error }

}