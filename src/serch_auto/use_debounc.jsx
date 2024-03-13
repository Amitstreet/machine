import { useState, useEffect } from 'react';
import useCache from './usecache';
import useFakeAPI from './fake_call';


const useDebounce = (value, delay) => {
    const  {data,loading,fetchData} = useFakeAPI();

  const [debouncedValue, setDebouncedValue] = useState(value);

const [ndata,setndata]= useState(data)
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return data;
};

export default useDebounce;
