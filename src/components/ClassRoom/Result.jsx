const Result = () => {
  return (
    <div className="w-full flex flex-col items-center px-20 pt-10 gap-5">
      <span className="text-2xl">Submit Assignment</span>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Assignment Link</span>
        <input
          type="text"
          name=""
          id=""
          className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Assignment Title</span>
        <input
          type="text"
          name=""
          id=""
          className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Assignment Description</span>
        <input
          type="text"
          name=""
          id=""
          className="py-2 outline-none border-none bg-slate-50 rounded w-[400px] pl-2"
        />
      </div>
      <button className="px-7 py-3 rounded-full bg-gradient-to-r from-darkblue to-lightblue font-medium">
        Submit Assignment
      </button>
    </div>
  );
};

export default Result;
