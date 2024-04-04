/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
const Modal = ({ d, setActive }) => {
  return (
    <div className="w-[500px] bg-white shadow-lg rounded p-10 flex flex-col text-dark gap-5 relative">
      <button
        className="size-8 bg-slate-50 absolute right-3 top-3 rounded-full flex items-center justify-center"
        onClick={() => setActive('')}
      ><RxCross2 size={25} className="opacity-50"/></button>
      <div className="flex items-center gap-5">
        <div className="size-16 rounded-full bg-slate-50"></div>
        <span className="font-medium text-lg">{d.name}</span>
      </div>
      <h1 className="text-xl">
        The Jewish Positive-Psychology Approach to Building a Solid Marriage.
      </h1>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password" className="font-medium text-sm">
          Password
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="w-full py-2 border-none outline-none pl-2 rounded"
        />
      </div>
      <button className="bg-darkblue py-2 text-white font-medium rounded transition-all duration-300 hover:scale-105">
        Join
      </button>
    </div>
  );
};

export default Modal;
