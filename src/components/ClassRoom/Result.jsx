import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Result = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <div className="w-full flex flex-col items-center px-20 pt-10 gap-5 static">
      <div className="w-full flex justify-center pt-10">
        <button
          onClick={() => setOpen(true)}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-darkblue to-lightblue font-medium"
        >
          Create Assignment
        </button>
      </div>
      {open && (
        <form
          //   onSubmit={handleCreateAssignment}
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
              Submit Assignment
            </button>
          </div>
        </form>
      )}
      <div className="w-full flex flex-col items-center gap-5 px-10">
        <span className="text-2xl font-semibold">All Assignment</span>
        <div className="w-full grid grid-cols-2 gap-5">
          {/* {homeworks &&
            homeworks.map((homework, i) => ( */}
          <div
            // key={i}
            className="rounded bg-lightblue flex flex-col items-center justify-center gap-3 p-5 font-medium"
          >
            <span>Assignment Link: fdghfhgf</span>
            <span>Title: dfgfg</span>
            <span>Description: dfhfgh</span>
            <span>Total Mark: 50</span>
            <span>Achived Mark: 50</span>
            <span>Result Description: sdfgfg</span>
            <div className="flex items-center justify-center gap-3 border-t w-full pt-5">
              <button
                onClick={() => setActive(1)}
                className="px-5 py-2 rounded-full bg-darkblue"
              >
                Give Result
              </button>
            </div>
            {active === 1 && (
              <form
                //   onSubmit={handleCreateAssignment}
                className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30"
              >
                <div className="max-w-[500px] flex flex-col items-center p-10 gap-5 bg-white text-dark rounded shadow-lg relative">
                  <button
                    className="size-8 bg-slate-50 absolute right-3 top-3 rounded-full flex items-center justify-center"
                    onClick={() => setActive("")}
                  >
                    <RxCross2 size={25} className="opacity-50" />
                  </button>
                  <span className="text-2xl font-semibold">Give Result</span>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Total Mark</span>
                    <input
                      type="text"
                      name="title"
                      id=""
                      className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Achieved Mark</span>
                    <input
                      type="text"
                      name="desc"
                      id=""
                      className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">
                      Result Description
                    </span>
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
                    Submit Assignment
                  </button>
                </div>
              </form>
            )}
            {/* <span>Assignment Link: {homework.homeworkLink}</span>
                <span>Title: {homework.homeworkTitle}</span>
                <span>Description: {homework.homeworkDesc}</span> */}
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Result;
