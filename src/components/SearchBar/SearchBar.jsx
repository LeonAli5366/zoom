import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="max-w-[400px] w-full flex items-center justify-between gap-5 bg-slate-50 px-5 py-2 rounded">
      <label htmlFor="search">
        <IoSearch className="text-darkblue cursor-pointer" />
      </label>
      <input
        type="text"
        name=""
        id="search"
        placeholder="classes"
        className="border-none outline-none placeholder:italic bg-transparent py-2"
      />
      <button className="bg-darkblue px-5 py-2 text-white font-medium rounded transition-all duration-300 hover:scale-105">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
