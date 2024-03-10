import React, { useEffect, useState } from 'react';

function ProgressBar() {
  
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0: prevProgress + 10));
    }, 1000); 

          return () => clearInterval(interval);
  }, []); // Run only once on mount

  
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }} >
        <span>{progress}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
