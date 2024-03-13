import React, { useEffect, useState } from 'react';

function ProgressBar() {
  const [progressBars, setProgressBars] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressBarCount = 5; // Number of progress bars
  const progressIncrement = 10; // Increment value for each step
  const intervalTime = 1000; // Interval time in milliseconds

  useEffect(() => {
    // Initialize progress bars
    const initialProgressBars = Array.from({ length: progressBarCount }, () => ({
      progress: 0,
    }));
    setProgressBars(initialProgressBars);
    // Start filling progress bars sequentially
    const interval = setInterval(() => {
      setProgressBars(prevProgressBars => {
        const updatedBars = prevProgressBars.map((bar, index) => {
          if (index === activeIndex) {
            const newProgress = Math.min(bar.progress + progressIncrement, 100);
            return { ...bar, progress: newProgress };
          }
          return bar;
        });

        if (updatedBars[activeIndex].progress >= 100) {
          console.log("yes")
          setActiveIndex(activeIndex+1);
        }

        return updatedBars;
      });
    }, intervalTime);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [activeIndex]); // Only re-run effect when activeIndex changes

  return (
    <div className="progress-bars-container">
      {progressBars.map((bar, index) => (
        <div key={index} className="progress-bar">
          <div
            className="progress"
            style={{ width: `${bar.progress}%` }}
          ></div>
          <span>{bar.progress}%</span>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
