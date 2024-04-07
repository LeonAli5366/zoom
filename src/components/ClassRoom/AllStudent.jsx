/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import userImg from "../../assets/user.png";
import { toast } from "react-hot-toast";
const AllStudent = ({ myClass, refresh, setRefresh }) => {
  const students = myClass?.students;
  const coTeacher = myClass?.classTeacher;
  console.log(coTeacher);

  const handlePromoteToCoTeacher = (email) => {
    const data = {
      studentEmail: email,
      classId: myClass._id,
    };

    console.log(data);

    const confirm = window.confirm(
      "are you sure you want to promote user to co-teacher"
    );
    if (confirm) {
      fetch(`http://localhost:5000/api/v1/class/coStudent`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRefresh(refresh + 1);
          toast.success("successfully promoted");
        });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-5 p-10">
      <span className="text-2xl font-semibold">All Student</span>
      <div className="w-full grid grid-cols-1 gap-2 overflow-y-scroll chat-scrollbar">
        {students &&
          students.map((student, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-slate-50 rounded p-5"
            >
              <div className="flex gap-2">
                <span className="size-8 rounded-full bg-lightblue">
                  {" "}
                  <img
                    src={student?.photo === "" ? userImg : student?.photo}
                    alt=""
                  />{" "}
                </span>
                <span className="text-dark font-medium">{student?.name}</span>
              </div>
              <button
                onClick={() => {
                  handlePromoteToCoTeacher(student?.email);
                }}
                className={`px-5 py-2 rounded-full bg-lightblue font-medium  `}
              >
                Promote to co-teacher
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllStudent;
