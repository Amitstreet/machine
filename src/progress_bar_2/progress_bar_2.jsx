import React, { useState, useEffect } from 'react';

function Help() {
  const [val, setVal] = useState(0);
  const [id, setId] = useState(0);
  const [idx, setIdx] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setVal((prevVal) => {
        if (prevVal === 100) {
          setIdx((prevIdx) => prevIdx + 1);
          return 0;
        } else {
          return prevVal + 10;
        }
      });
    }, 1000);

    setId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  if (val > 100) {
    clearInterval(id);
  }

  return (
    <div className="progress-bar">
      {arr.map((ele, nidx) => (
        <div
          key={nidx}
          className="progress"
          style={{ width: `${nidx === idx ? val : 0}%` }}
        >
          <span>{nidx === idx ? val : 0}</span>
        </div>
      ))}
    </div>
  );
}

export default Help;
