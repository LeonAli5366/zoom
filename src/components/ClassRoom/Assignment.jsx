import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Assignment = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col static gap-5">
      <div className="w-full flex justify-center pt-10">
        <button
          onClick={() => setOpen(true)}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-darkblue to-lightblue font-medium"
        >
          Create Homework
        </button>
      </div>
      <div className="w-full flex flex-col items-center gap-5 px-10">
        <span className="text-2xl font-semibold">All Assignment</span>
        <div className="w-full grid grid-cols-5 gap-5">
            <div className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium">
                <span>Assignment Link: dfgfghgf</span>
                <span>Title: fdghfhgf</span>
                <span>Description: fdghfhgf</span>
            </div>
            <div className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium">
                <span>Assignment Link: dfgfghgf</span>
                <span>Title: fdghfhgf</span>
                <span>Description: fdghfhgf</span>
            </div>
            <div className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium">
                <span>Assignment Link: dfgfghgf</span>
                <span>Title: fdghfhgf</span>
                <span>Description: fdghfhgf</span>
            </div>
            <div className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium">
                <span>Assignment Link: dfgfghgf</span>
                <span>Title: fdghfhgf</span>
                <span>Description: fdghfhgf</span>
            </div>
            <div className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium">
                <span>Assignment Link: dfgfghgf</span>
                <span>Title: fdghfhgf</span>
                <span>Description: fdghfhgf</span>
            </div>
        </div>
      </div>
      {open && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30">
          <div className="max-w-[500px] flex flex-col items-center p-10 gap-5 bg-white text-dark rounded shadow-lg relative">
            <button
              className="size-8 bg-slate-50 absolute right-3 top-3 rounded-full flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <RxCross2 size={25} className="opacity-50" />
            </button>
            <span className="text-2xl font-semibold">Create Home Work</span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Homework Link</span>
              <input
                type="text"
                name=""
                id=""
                className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Homework Title</span>
              <input
                type="text"
                name=""
                id=""
                className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Homework Description</span>
              <input
                type="text"
                name=""
                id=""
                className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
              />
            </div>
            <button className="px-7 py-3 rounded-full text-white bg-gradient-to-r from-darkblue to-lightblue font-medium">
              Create Homework
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Assignment;
