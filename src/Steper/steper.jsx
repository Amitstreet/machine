import React from 'react'
import { useState } from 'react'


function steper() {

    let obj = [{
        text: "Being process",
        id: 0,
    }, {
        text: "Waiting payment",
        id: 1,
    }, {
        text: "Paid",
        id: 2,
    }]


    const [active, setactive] = useState([-1]);
    const [current, setcurrent] = useState(-1);




    const next = () => {
        if (current <= obj.length - 1) {
            setcurrent(current + 1);
            if (!active.includes(current + 1)) {
                active.push(current + 1);
                setactive([...active])
            }
        }
    }

    const prev = () => {
        setcurrent(current - 1);
        active.pop();
    }


    return (


        <div class="progress-container">

            <ul class="progressBar">
                {
                    obj.map((ele, idx) => {
                        return <li id={idx} className={active.includes(idx) ? 'active' : "deactive"}>{ele.text}</li>
                    })
                }
            </ul>
            <div class="process_btn">

                <button onClick={next} class="next"> next </button>
                <button onClick={prev} class="prev"> prev  </button>
            </div>
        </div>

    )
}

export default steper