/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SetDataToLocalStorage from "../SetDataToLocalStroge/SetDataToLocalStroge";
import { useContext } from "react";
import { AuthContext } from "../../Contextapi/UserContext";
const Login = () => {
  const { refresh, setRefresh } = useContext(AuthContext);
  const navigate = useNavigate();
  // all functions
  const handleLogInSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };

    fetch("http://localhost:5000/api/v1/user/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("login successful");
          navigate("/");
          SetDataToLocalStorage(data.userData);
          // window.location.reload();
          setRefresh(refresh + 1);
          console.log(data.userData);
        } else {
          toast.error("something went wrong");
        }
      });
  };
  return (
    <div className="w-full h-screen bg-dark login">
      <form
        onSubmit={handleLogInSubmit}
        className="flex flex-col items-center justify-evenly text-white form sm:h-[520px] sm:w-[400px] w-[300px] h-[350px] sm:gap-0 gap-2"
      >
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">Login Here</h3>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
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
            name="password"
            id="password"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <h1 className="sm:text-sm text-xs flex items-center gap-1">
          Don&apos;t have an account{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-500 cursor-pointer hover:underline transition-all duration-300"
          >
            Signup Here!
          </Link>
        </h1>
        {/* <h1 className="text-red-600 text-center">{error}</h1> */}
        <button className="w-full bg-white text-black transition-all duration-300 scale-105 sm:py-2 py-1 mt-2 font-medium rounded hover:bg-slate-200">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
