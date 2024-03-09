import React from 'react'

function user({setid,msg}) {

   
    const finduserid=(e)=>{

setid(e.target.id)
    }

  return (
  <div class="mainContactBox" id={msg.id} onClick={finduserid}>
    <div class="userLogoBox" id={msg.id} ><img  id={msg.id} src={msg.imageURL} class="userImg"/></div>
    <div id={msg.id}  class="userDetailsBox">
        <p id={msg.id} class="userName">{msg.title}</p>
        <p id={msg.id} class="userLastMessage">hey there</p>
    </div>
  </div>
    )
}

export default user