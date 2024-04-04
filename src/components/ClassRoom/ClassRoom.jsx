import Chat from "../Chat/Chat";

const ClassRoom = () => {
  return (
    <div className="w-full h-screen bg-dark text-white flex pt-16">
      <div className="w-[20%] h-full flex flex-col border-r font-medium text-lg">
        <button className="w-full py-5 bg-lightblue border-b">
          Assignment
        </button>
        <button className="w-full py-5 bg-lightblue border-b">
          Class Chat
        </button>
        <button className="w-full py-5 bg-lightblue border-b">
          Result
        </button>
        <button className="w-full py-5 bg-lightblue border-b">
          Leave
        </button>
      </div>
      <div className="w-full h-full">
        <Chat/>
      </div>
    </div>
  );
};

export default ClassRoom;
