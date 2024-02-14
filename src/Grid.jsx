import React from 'react'
import Box from './Box'
import { useState } from 'react';

function grid() {
  let [rev_arr, set_arr] = useState([]);
  let [arr, setarr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  let [id, setid] = useState(null)
  let intervalId = null;
  const add = (e) => {
    let click_id = e.target.id;
    if (!rev_arr.includes(click_id)) {
      rev_arr.push(click_id);
    }
    if (rev_arr.length == arr.length) {
      rev_method()
    }
    set_arr([...rev_arr]);
    arr[click_id] = 1;
    setarr(arr)
  }
  const rev_method = () => {
    let intervalId = setInterval(() => {
      let id = rev_arr.pop();
      arr[id] = 0;
      setarr([...arr]);
    }, 500);
    setid(intervalId)
  }
  if (!arr.includes(1)) {
    console.log("uu")
    clearInterval(id);
  }
  return (
    <div class="main_container">
      {arr.map((ele, idx) => {
        return ele != 1 ? <div className='box' onClick={add} id={idx}>{idx}</div> : <div className='box red' id={idx}>{idx}
        </div>
      })}

    </div>
  )
}

export default grid