/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Chat from "../Chat/Chat";
import { AuthContext } from "../../Contextapi/UserContext";
import Assignment from "./Assignment";
import Result from "./Result";
const ClassRoom = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(myClass);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/api/v1/class/studentClass?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyClass(data?.studentClasses[0]);
        setLoading(false);
      });
  }, [user]);

  const handleDeleteClass = () => {
    fetch();
  };

  const [toggle, setToggle] = useState("assignment");
  return (
    <div>
      {/* {loading ? (
        <>
          <h1 className="text-center text-black pt-60 bg-[#ffffff]">
            Loading...
          </h1>
        </>
      ) : ( */}
      <>
        <div>
          {myClass ? (
            <>
              <div className="w-full h-screen bg-dark text-white flex pt-16">
                <div className="w-[20%] h-full flex flex-col border-r font-medium text-lg">
                  <button
                    onClick={() => setToggle("assignment")}
                    className="w-full py-5 bg-lightblue border-b"
                  >
                    Assignment
                  </button>
                  <button
                    onClick={() => setToggle("chat")}
                    className="w-full py-5 bg-lightblue border-b"
                  >
                    Class Chat
                  </button>
                  <button
                    onClick={() => setToggle("result")}
                    className="w-full py-5 bg-lightblue border-b"
                  >
                    Result
                  </button>
                  <button className="w-full py-5 bg-lightblue border-b">
                    Leave
                  </button>
                  <button
                    onClick={handleDeleteClass}
                    className={`w-full py-5 bg-lightblue border-b `}
                  >
                    {/* ${
                        user?.email === myClass?.classTeacher ? "" : "hidden"
                      } */}
                    Delete Class
                  </button>
                </div>
                {toggle === "chat" ? <Chat myClass={myClass} /> : ""}
                {toggle === "assignment" ? <Assignment /> : ""}
                {toggle === "result" ? <Result /> : ""}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-5xl font-bold text-black pt-60 bg-[#ffffff]">
                Login to a class first
              </h1>
            </div>
          )}
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default ClassRoom;
