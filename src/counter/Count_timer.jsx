import React from 'react'
import { useState, useRef } from 'react';
function Count_timer() {
  let [time, settime] = useState({ houre: "00", min: "00", sec: "00" });
  let [id, setid] = useState(null);
  let [pause, setpause] = useState(false);
  const time_obj = (e) => {
    let val = e.target.value;
    let data = e.target.className;
    let classnames = data.split(' ');
    if (classnames.includes('houre')) {
      settime({ ...time, houre: val })
    }
    if (classnames.includes('minute')) {
      settime({ ...time, min: val })
    }
    if (classnames.includes('seconds')) {
      settime({ ...time, sec: val })
    }
  }
  const start = (e) => {
    let stat = e.target;
    console.log(stat);
    let { houre, min, sec } = time;
    pause ? setpause(false) : setpause(true)
    if (pause) {
      let id = setInterval(() => {
        if (houre > 0 && min == 0 && sec == 0) {
          houre = houre - 1;
          min = 60;
          sec = 59;
        }
        else {
          sec = sec - 1;
          if (sec == -1) {
            min = min - 1;
            sec = 59;
          }
          if (min == -1) {
            houre = houre - 1;
            min = 59;
          }
        }
        settime({ ...time, houre: houre, min: min, sec: sec })
      }, 1000)
      setid(id);
    }
    clearInterval(id);

  }
  const stop = () => {
    clearInterval(id);
    settime({ houre: "00", min: "00", sec: "00" })
  }

  console.log(pause);


  return (
    <div>
      <div class="Time">
        <input maxLength={2} onChange={time_obj} value={time.houre} className="houre time" />
        <input maxlength={2} onChange={time_obj} value={time.min} className="minute time" />
        <input maxlength={2} onChange={time_obj} value={time.sec} className="seconds time" />
      </div>
      <div class="Time_btn">
        <button class="Start" onClick={start}>{pause ? "pause" : "start"}</button>

        <button class="Stop" onClick={stop} >Stop</button>
      </div>
    </div>
  )
}

export default Count_timer