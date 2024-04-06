/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Contextapi/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Modal = ({ d, setActive }) => {
  const { classTitle, classTeacher, _id } = d;
  const { user } = useContext(AuthContext);
  const { name, email, photo } = user;
  const navigate = useNavigate();

  const handleStudentLogInInClass = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    if (!user?.email) {
      return navigate("/login");
    }

    const data = {
      name,
      email,
      photo,
      classId: _id,
      password,
    };

    console.log(data);

    fetch("http://localhost:5000/api/v1/class/addStudent", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("class login successful");
          navigate("/");
        } else if (data.status === "fail") {
          toast.error(data.message);
        } else {
          toast.error("something went wrong");
        }
      });
  };
  return (
    <form
      onSubmit={handleStudentLogInInClass}
      className="w-[500px] bg-white shadow-lg rounded p-10 flex flex-col text-dark gap-5 relative"
    >
      <button
        className="size-8 bg-slate-50 absolute right-3 top-3 rounded-full flex items-center justify-center"
        onClick={() => setActive("")}
      >
        <RxCross2 size={25} className="opacity-50" />
      </button>
      <div className="flex flex-col">
        {/* <div className="size-16 rounded-full bg-slate-50">{}</div> */}
        <span className="font-medium text-lg">Title : {classTitle}</span>
        <span className="font-medium text-lg">Teacher : {classTeacher}</span>
      </div>
      <h1 className="text-xl">{d.classDesc}</h1>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password" className="font-medium text-sm">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full py-2 border-none outline-none pl-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-darkblue py-2 text-white font-medium rounded transition-all duration-300 hover:scale-105"
      >
        Join
      </button>
    </form>
  );
};

export default Modal;
