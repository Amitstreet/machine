import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [targetTime, setTargetTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime.hours === targetTime.hours && prevTime.minutes === targetTime.minutes && prevTime.seconds === targetTime.seconds) {
            setIsActive(false);
            clearInterval(interval);
            return prevTime;
          }
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const newHours = prevTime.hours + Math.floor(newMinutes / 60);
          return {
            hours: newHours,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60
          };
        });
      }, 1000);
    } else if (!isActive && (time.hours !== 0 || time.minutes !== 0 || time.seconds !== 0)) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, targetTime]);

  const toggleStopwatch = () => {
    setIsActive(!isActive);
  };

  const resetStopwatch = () => {
    setIsActive(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const handleStart = () => {
    const hours = parseInt(inputHours) || 0;
    const minutes = parseInt(inputMinutes) || 0;
    const seconds = parseInt(inputSeconds) || 0;
    setTargetTime({ hours, minutes, seconds });
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsActive(true);
  };

  return (
    <div>
      <h1>Stopwatch: {time.hours.toString().padStart(2, '0')}:{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}</h1>
      <div>
        <input
          type="number"
          placeholder="Hours"
          value={inputHours}
          onChange={e => setInputHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minutes"
          value={inputMinutes}
          onChange={e => setInputMinutes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={inputSeconds}
          onChange={e => setInputSeconds(e.target.value)}
        />
        <button onClick={handleStart}>Start</button>
      </div>
      <button onClick={toggleStopwatch}>{isActive ? 'Pause' : 'Resume'}</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;
