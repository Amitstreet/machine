import React, { useState, useEffect } from 'react';

function Time() {
    const [time, setTime] = useState({ hours: "00", minutes: "00", seconds: "00" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const hours = padZero(currentDate.getHours());
            const minutes = padZero(currentDate.getMinutes());
            const seconds = padZero(currentDate.getSeconds());
            setTime({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Function to pad single digit numbers with leading zeros
    const padZero = (num) => {
        return (num < 10 ? '0' : '') + num;
    };

    return (
        <div className="clock">
            <div className="hours">{time.hours}</div>
            <div className="min">{time.minutes}</div>
            <div className="sec">{time.seconds}</div>
        </div>
    );
}

export default Time;
