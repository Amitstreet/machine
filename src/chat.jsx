import React, { useState, useRef } from 'react';
import User from './user';

function Chat({ message }) {
  const [id, setId] = useState(1);
  const [newMessage, setNewMessage] = useState(message);
  const count = useRef("");


  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const newMsg = count.current.value;
      const updatedMessages = newMessage.map((msg, idx) => {
        if (msg.id === id) {
          return {
            ...msg,
            messageList: [...msg.messageList, { message: newMsg }]
          };
        }
        return msg;
      });
      setNewMessage(updatedMessages);
    }
  };

  
  const filterMsg = newMessage.filter((msg, idx) => id - 1 === idx);

  return (
    <div className="chatBox">
      <div className="chatSection">
        <div className="contactSection">
          <input type="text" className="contactSearchInputBox" placeholder="Search your contact" value="" />
          <div className="scrollableContact">
            {newMessage.map((ele, idx) => (
              <User key={ele.id} setid={setId} msg={ele} />
            ))}
          </div>
        </div>
        <div className="messageSection">
          <input type="text" className="sendMessage" ref={count} onKeyPress={handleKeyPress} placeholder="Type a message" />
          <div className="scrollableMessage">
            <div className="mainMessageBox">
              {filterMsg[0]?.messageList.map((ele, idx) => (
                <div key={idx}>
                  <div className="messageText">{ele.message}</div>
                  <br />
                </div>
              ))}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
