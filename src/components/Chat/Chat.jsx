/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoMdSend } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { SocketConnection } from "../../Contextapi/SocketContext";
const Chat = () => {
  const { socket } = useContext(SocketConnection);

  // ALL STATE
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socketID, setsocketID] = useState("");
  // const [room, setRoom] = useState("");
  // const [roomName, setroomName] = useState("");

  // send message
  const handleForm = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  // CONNECT SOCKET IO
  useEffect(() => {
    socket.on("connect", () => {
      setsocketID(socket.id);
      console.log("Connected", socket.id);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });


    socket.on("receive-message", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });
    console.log(message);


    return () => {
      socket.disconnect();
    };
  }, []);

  


  return (
    <div className="w-full h-full flex flex-col justify-between gap-5">
      <div className="w-full flex items-center justify-between px-5 border-b py-5">
        <div className="flex items-center gap-3">
          <span className="size-12 rounded-full bg-slate-100"></span>
          <div className="flex flex-col justify-center">
            <h1>Baby Devs</h1>
            <h1>5 Participants</h1>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <IoMdPersonAdd size={25} className="cursor-pointer" />
          <MdAssignmentAdd size={25} className="cursor-pointer" />
          <div className="bg-slate-50 size-8 rounded-full flex items-center justify-center">
            <BsThreeDotsVertical size={20} className="text-black" />
          </div>
        </div>
      </div>

      {/* conversation sec */}
      <div className="h-full flex flex-col gap-3 px-5">
        <div className="w-full flex justify-start gap-3">
          <span className="size-10 rounded-full bg-slate-50"></span>

          {messages.map((msg, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-xs">11:53 AM</span>
              <span className="text-left px-5 py-2 bg-darkblue rounded-tl-none rounded-xl">
                {msg}
              </span>
            </div>
           ))} 
        </div>
        <div className="w-full flex justify-end">
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs">11:53 AM</span>
            <span className="text-left px-5 py-2 bg-lightblue rounded-br-none rounded-xl">
              Hello
            </span>
          </div>
        </div>
      </div>
      {/* text sec */}
      <form onSubmit={handleForm}>
        <div className="w-full flex items-center gap-2 px-5 pb-5">
          <input
            className="w-full py-3 rounded-full bg-white text-dark outline-none border-none pl-5"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            className="px-4 py-4 rounded-full bg-darkblue hover:bg-lightblue flex items-center justify-center"
          >
            <IoMdSend size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
