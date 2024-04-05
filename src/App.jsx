import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ClassRoom from "./components/ClassRoom/ClassRoom";

const App = () => {


    
    

  return (
    <div className="bg-dark w-full relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/classroom" element={<ClassRoom />} />
      </Routes>
    </div>
  );
};

export default App;
