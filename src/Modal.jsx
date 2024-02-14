import { set } from 'mongoose'
import React from 'react'

function Modal({id,images,max,setidx}) {

   
    let image= images.filter((ele,idx)=>{
     return   id==idx
    })

    console.log(id);

    const next= ()=>{
      if(id<max-1)
      { 
        id=parseInt(id)+1;
      setidx(id);
      }
    }
    const prev=()=>{
        if(id>0)
        {
         id=parseInt(id)-1;
         setidx(id);
        }
    }
    console.log(image)

  return (
    
          <div class="active_img">
          <div class="md_imag">
            <img src={image[0]?.image_url}/>
          </div>
          <div class="btn">
           
            <button onClick={prev} class="prev_btn">
              prev
            </button>
            <button  onClick={next} class="next_btn">
              next
            </button>
          </div>
        

    </div>
  )
}

export default Modal