import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Contextapi/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CreateClass = ({ select, setSelect }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const classTitle = form.classTitle.value;
    const classDesc = form.classDesc.value;
    const password = form.password.value;

    const data = {
      classTeacher: user.email,
      classTitle,
      classDesc,
      classPassword: password,
    };

    console.log(data);

    fetch("http://localhost:5000/api/v1/class/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("class created successfully");
          window.location.reload();
          navigate("/");
        } else {
          toast.error("something went wrong");
          console.log(data);
        }
      });
  };
  return (
    <>
      {select && (
        <form
          onSubmit={handleCreateClass}
          className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30"
        >
          <div className="w-[500px] bg-white rounded text-dark shadow-lg flex flex-col items-center justify-center gap-5 p-10 relative">
            <button
              className="size-8 bg-slate-50 absolute right-3 top-3 rounded-full flex items-center justify-center"
              onClick={() => setSelect(false)}
            >
              <RxCross2 size={25} className="opacity-50" />
            </button>
            <span className="text-xl font-medium">Create a class</span>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="title" className="text-sm">
                Class Title
              </label>
              <input
                type="text"
                name="classTitle"
                id="title"
                className="outline-none border-none py-2 rounded pl-2"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="title" className="text-sm">
                Class desc
              </label>
              <textarea
                type="text"
                name="classDesc"
                id="title"
                className="outline-none border-none py-2 rounded pl-2"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="outline-none border-none py-2 rounded pl-2"
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-darkblue to-lightblue text-white font-medium"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateClass;
