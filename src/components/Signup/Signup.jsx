import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen bg-dark login">
      <form className="flex flex-col items-center justify-evenly text-white form sm:h-[580px] sm:w-[400px] w-[300px] h-[450px] gap-2">
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">
          Signup Here
        </h3>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="firstname"
            className="cursor-pointer sm:text-base text-sm"
          >
            FirstName
          </label>
          <input
            type="text"
            placeholder="firstname"
            id="firstname"
            name="firstname"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="lastname"
            className="cursor-pointer sm:text-base text-sm"
          >
            LastName
          </label>
          <input
            type="text"
            placeholder="lastname"
            id="lastname"
            name="lastname"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            id="username"
            name="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="password"
            className="cursor-pointer sm:text-base text-sm"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <h1 className="sm:text-sm text-xs flex items-center gap-1">
          Already have an account{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-500 cursor-pointer hover:underline transition-all duration-300"
          >
            Login Here!
          </Link>
        </h1>
        {/* <h1 className="text-red-600 text-center">{error}</h1> */}
        <button
          type="submit"
          className="w-full bg-white text-black sm:py-2 py-1 mt-2 sm:text-lg text-base font-medium rounded hover:bg-slate-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
