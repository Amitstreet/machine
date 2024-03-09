

import React, { useState } from 'react';

function Star() {
    const [count, setCount] = useState(0);
    const [filled, setFilled] = useState();
  
    const handleStarClick = (index) => {
      setFilled(index + 1);
      setCount(index + 1);
    };
  
    const handleMouseOver = (index) => {
      setFilled(index + 1);
    };
  
    const handleMouseLeave = (index) => {
    // setFilled(index);
    setFilled(count)
    };

const renderStarRating = () => {
      const stars = [];
  
      for (let i = 0; i < 5; i++) {
        stars.push(
          <span
            key={i}
            className={`star ${i < filled ? "star-filled" : ""}`}
            onClick={() => handleStarClick(i)}
            onMouseOver={() => handleMouseOver(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            &#9734;
          </span>
        );
      }
  
      return stars;
    };
return (
      <div className='starContainer'>
        <h1>Rating Section</h1>
        <div className="stars">
          {renderStarRating()}
        </div>
        <h2 id='count'>Rating Count : {count}</h2>
      </div>
    )
  }

  export default Star;