import { useState, useEffect } from 'react';

const useCache = () => {
  const [cachedResponses, setCachedResponses] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('searchCache');
    if (storedData) {
      setCachedResponses(JSON.parse(storedData));
    }
  }, []);

  const updateCache = (keyword, response) => {
    const updatedResponses = { ...cachedResponses, [keyword]: response };
    setCachedResponses(updatedResponses);
    localStorage.setItem('searchCache', JSON.stringify(updatedResponses));
  };

  const getCachedResponse = (keyword) => {
    if(cachedResponses[keyword]=={})
    {
        return false;
    }
    
    return cachedResponses[keyword];
  };

  return [getCachedResponse, updateCache];
};

export default useCache;
