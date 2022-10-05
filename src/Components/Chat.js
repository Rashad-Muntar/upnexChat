import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function Chat() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMsgs(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {msgs.map(({ id, text, sender, photoURL }) => (
        <div key={id}>
          <img src={photoURL} alt="user"/>
          <p>{text}</p>
          <p>{sender}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;
