import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ClassRoom from "./components/ClassRoom/ClassRoom";
import { useState } from "react";
import CreateClass from "./components/CreateClass/CreateClass";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [select, setSelect] = useState(false);
  return (
    <div className="bg-dark w-full relative">
      <Navbar  setSelect={setSelect}/>
      <CreateClass select={select} setSelect={setSelect}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/classroom" element={<ClassRoom />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
