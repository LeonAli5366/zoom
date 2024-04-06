/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Chat from "../Chat/Chat";
import { AuthContext } from "../../Contextapi/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Assignment from "./Assignment";
import Result from "./Result";
import AllStudent from "./AllStudent";
const ClassRoom = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(1);
  const navigate = useNavigate();

  // const { _id } = myClass;

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
  }, [user, refresh]);

  const handleDeleteClass = () => {
    console.log();
    const confirm = window.confirm("Are you sure you want to delete th class?");
    if (confirm) {
      fetch(`http://localhost:5000/api/v1/class/delete?_id=${myClass?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // window.location.reload();
          navigate("/");
          console.log(data);
        });
    }
  };

  const handleLeaveGroup = () => {
    fetch(`http://localhost:5000/api/v1/class/leave?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        toast.success("leave class successfully");
        navigate("/");
      });
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
                  <button
                    onClick={() => setToggle("allstudent")}
                    className="w-full py-5 bg-lightblue border-b"
                  >
                    All Student
                  </button>
                  <button
                    onClick={handleLeaveGroup}
                    className="w-full py-5 bg-lightblue border-b"
                  >
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
                {toggle === "assignment" ? (
                  <Assignment
                    myClass={myClass}
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                ) : (
                  ""
                )}
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
