import React from 'react'

function transfer_list() {
  return (
    <div>
      <div class="transfer">
        <ul class="First">

          <li>
          <input type="checkbox" />
            HTML</li>
          <li>           <input type="checkbox" />
JavaScript</li>
          <li>           <input type="checkbox" />
CSS</li>
          <li>           <input type="checkbox" />
TypeScript</li>
        </ul>


           <ul>
            <li>
            <button>all next</button>
            </li>
            <li><button>
                next
                </button></li>
            <li><button>
                prvious
                </button></li>

            <li>
                <button>
                    all back
                    </button></li>    

           </ul>


        <ul class="Sec">
          <li> <input type="checkbox" />React</li>
          <li> <input type="checkbox" />Angular</li>
          <li>  <input type="checkbox" />Vue</li>
          <li> <input type="checkbox" />Svelte</li>
        </ul>
      </div>
    </div>
  )
}

export default transfer_list