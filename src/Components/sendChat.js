import React, { useState } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendChat = ({ scroll }) => {
  const [msg, setMsg] = useState("");
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser.username);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (msg === "") {
      alert("Please enter a valid message");
      return;
    }

    await addDoc(collection(db, "messages"), {
      text: msg,
      name: currentUser.username,
      timestamp: serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  const onChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={msg}
        onChange={onChangeMsg}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendChat;
