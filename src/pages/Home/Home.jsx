/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/Modal/Modal";
const data = [
  {
    title: "fdhgfh",
    name: "science",
  },
  {
    title: "fdhgfh",
    name: "science",
  },
  {
    title: "fdhgfh",
    name: "science",
  },
  {
    title: "fdhgfh",
    name: "science",
  },
  {
    title: "fdhgfh",
    name: "science",
  },
];

const Home = () => {
  const [active, setActive] = useState();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/class/all")
      .then((res) => res.json())
      .then((data) => setClasses(data.class));
  }, []);
  return (
    <div className="w-full h-screen p-10 static pt-20">
      <div className="max-w-[60%] w-full h-full mx-auto flex flex-col gap-5">
        <SearchBar />
        <div className="w-full grid grid-cols-1 gap-3">
          {classes.map((singleClass, i) => (
            <div
              key={singleClass._id}
              className="w-full bg-gray-300 px-5 py-2 rounded flex items-center justify-between"
            >
              <div>
                {active === i && (
                  <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30">
                    <Modal d={singleClass} setActive={setActive} />
                  </div>
                )}
                <span className=" font-normal"><span className="font-medium">Title : </span>{singleClass.classTitle}</span>
                <h1 className=""><span className="font-medium">Teacher: </span>{singleClass.classTeacher}</h1>
              </div>
              <div className="flex items-center gap-5">
                <span className="size-2 rounded-full bg-green-500"></span>
                <button
                  onClick={() => setActive(i)}
                  className="bg-darkblue px-5 py-2 text-white font-medium rounded transition-all duration-300 hover:scale-105"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
