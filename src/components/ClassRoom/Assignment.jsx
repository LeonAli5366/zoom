/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Assignment = ({ myClass, refresh, setRefresh }) => {
  const homeworks = myClass?.homework;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleCreateAssignment = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const desc = form.desc.value;
    const link = form.link.value;

    const data = {
      homeworkTitle: title,
      homeworkDesc: desc,
      homeworkLink: link,
      classId: myClass?._id,
    };

    fetch(`http://localhost:5000/api/v1/class/homework`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
        toast.success("Assignment created successfully");
      });
  };
  return (
    <div className="w-full h-full flex flex-col static gap-5">
      <div className="w-full flex justify-center pt-10">
        <button
          onClick={() => setOpen(true)}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-darkblue to-lightblue font-medium"
        >
          Create Assignment
        </button>
      </div>
      <div className="w-full flex flex-col items-center gap-5 px-10">
        <span className="text-2xl font-semibold">All Assignment</span>
        <div className="w-full grid grid-cols-2 gap-5">
          {homeworks &&
            homeworks.map((homework, i) => (
              <div
                key={i}
                className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium"
              >
                <span>Assignment Link: {homework.homeworkLink}</span>
                <span>Title: {homework.homeworkTitle}</span>
                <span>Description: {homework.homeworkDesc}</span>
              </div>
            ))}
        </div>
      </div>
      {open && (
        <form
          onSubmit={handleCreateAssignment}
          className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30"
        >
          <div className="max-w-[500px] flex flex-col items-center p-10 gap-5 bg-white text-dark rounded shadow-lg relative">
            <button
              className="size-8 bg-slate-50 absolute right-3 top-3 rounded-full flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <RxCross2 size={25} className="opacity-50" />
            </button>
            <span className="text-2xl font-semibold">Create Assignment</span>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Assignment Title</span>
              <input
                type="text"
                name="title"
                id=""
                className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">
                Assignment Description
              </span>
              <input
                type="text"
                name="desc"
                id=""
                className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Assignment Link</span>
              <input
                type="text"
                name="link"
                id=""
                className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3 rounded-full text-white bg-gradient-to-r from-darkblue to-lightblue font-medium"
            >
              Create Assignment
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Assignment;
