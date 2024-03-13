import React from 'react'
import useFakeAPI from './fake_call';
import { useState } from 'react';
import useCache from './usecache';
import useDebounce from './use_debounc';

function Serch() {

  const { data, loading, fetchData } = useFakeAPI();
  const [word, setword] = useState("");

  const debouncedInputValue = useDebounce(word, 500); // Debounce with a delay of 500 milliseconds
  const wordupdate = (e) => {
    setword(e.target.value);
  }

  return (
    <div>
      <input onChange={wordupdate} value={word} />
      <div class="sug_cont">
        {
          debouncedInputValue?.map((ele) => {
            return <div class="sug">
              {ele}
            </div>
          })

        }
      </div>
    </div>
  )
}

export default Serch