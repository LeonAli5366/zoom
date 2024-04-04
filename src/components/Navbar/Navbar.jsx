import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setactive] = useState(false);
  return (
    <div className="text-white w-full flex items-center justify-between py-3 px-20 shadow-xl absolute top-0 left-0 bg-white">
      <button>Home</button>
      <div className="flex items-center gap-5 text-white font-medium">
        <button className="bg-darkblue px-4 py-2 rounded transition-all duration-300 hover:scale-105">
          <Link to="/">Home</Link>
        </button>
        <button className="bg-darkblue px-4 py-2 rounded transition-all duration-300 hover:scale-105">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-darkblue px-4 py-2 rounded transition-all duration-300 hover:scale-105">
          <Link to="/signup">Sign up</Link>
        </button>
        <button className="bg-darkblue px-4 py-2 rounded transition-all duration-300 hover:scale-105">
          <Link to="/classroom">Class Room</Link>
        </button>
        <button className="px-7 py-3 bg-gradient-to-r from-darkblue to-lightblue rounded-full transition-all duration-300 hover:scale-105">
          Create A Class
        </button>
        <button onClick={()=>setactive(!active)} className="size-10 rounded-full bg-slate-300 relative ">
          <img src="https://i.pinimg.com/736x/7f/da/87/7fda8779e293b76264d19b998927b59c.jpg" alt="" className="object-cover object-center rounded-full" />
          {active && (
            <div className="absolute -bottom-[88px] -left-8 bg-slate-50 text-dark">
              <button className="px-7 py-2 border-b hover:bg-slate-200">
                Profile
              </button>
              <button className="px-7 py-2 border-b hover:bg-slate-200">
                Logout
              </button>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
