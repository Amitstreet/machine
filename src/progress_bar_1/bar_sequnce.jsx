import React, { useState, useEffect } from 'react';

function Help() {
  const [val, setVal] = useState(0);
  let [id, setId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);
  const [start, setstart] = useState(false)

  useEffect(() => {
    console.log("yes")
    if (start) {
      id = setInterval(() => {
        setVal((prevVal) => {
          if (prevVal === 100) {
            return 0;
          } else {
            return prevVal + 10;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [start]);

  if (val > 100) {
    clearInterval(id);
  }
  const handle = () => {
    start ? setstart(false) : setstart(true)
  }



  return (
    <div className="progress-bar">
      {arr.map((ele, nidx) => (
        <div
          key={nidx}
          className="progress"
          style={{ width: `${val}%` }}
        >
          <span>{val}</span>
        </div>
      ))}


      <div class="btn">
        <div class="start">
          <button class="st"> start</button>
        </div>
        <div class="stop">
          <button onClick={handle} class="so">stop</button>
        </div>
      </div>
    </div>
  );
}

export default Help;
