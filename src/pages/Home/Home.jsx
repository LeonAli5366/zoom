import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Modal from '../../components/Modal/Modal';
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
    return (
        <div className="w-full h-screen p-10 static pt-20">
        <div className='max-w-[60%] w-full h-full mx-auto flex flex-col gap-5'>
        <SearchBar />
        <div className="w-full grid grid-cols-1 gap-3">
          {data.map((d, i) => (
            <div
              key={i}
              className="w-full bg-gray-300 px-5 py-2 rounded flex items-center justify-between"
            >
              <div>
                {active === i && (
                  <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 modal bg-black bg-opacity-30">
                    <Modal d={d} setActive={setActive} />
                  </div>
                )}
                <span className="text-sm font-normal">{d.title}</span>
                <h1 className="font-medium">{d.name}</h1>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-darkblue">Online</span>
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