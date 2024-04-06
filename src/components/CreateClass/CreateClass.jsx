import { RxCross2 } from "react-icons/rx";

/* eslint-disable react/prop-types */
const CreateClass = ({ select, setSelect }) => {
  return (
    <>
      {select && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30">
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
                Title
              </label>
              <input
                type="text"
                name=""
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
                name=""
                id="password"
                className="outline-none border-none py-2 rounded pl-2"
              />
            </div>
            <div className="w-full flex justify-center">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-darkblue to-lightblue text-white font-medium">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateClass;
