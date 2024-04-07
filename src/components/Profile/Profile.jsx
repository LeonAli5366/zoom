/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contextapi/UserContext";
import userImg from "../../assets/user.png";
import { toast } from "react-hot-toast";
import SetDataToLocalStorage from "../SetDataToLocalStroge/SetDataToLocalStroge";
import { ClipLoader } from "react-spinners";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, refresh, setRefresh } = useContext(AuthContext);

  const handleUpdateProfilePhoto = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const photo = event.target.photo.files[0];

    const photoData = new FormData();

    photoData.append("file", photo);
    photoData.append("upload_preset", "test-upload");
    photoData.append("cloud_name", "dqeuy96cs");

    // post photo
    fetch("https://api.cloudinary.com/v1_1/dqeuy96cs/image/upload", {
      method: "POST",
      body: photoData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.url) {
          const userData = {
            name: user.name,
            email: user.email,
            photo: data.url,
            _id: user._id,
          };
          SetDataToLocalStorage(userData);
          setRefresh(refresh + 1);
          form.reset();
          setLoading(false);
        } else {
          toast.error("something went wrong");
          setLoading(false);
        }
      });
  };

  return (
    <div className="bg-[#1d3b55] w-screen h-screen text-white pt-20 text-center">
      <h1 className="text-5xl font-bold">
        Welcome to Your Profile {user.name}
      </h1>
      <div className="flex justify-center flex-col items-center mt-16">
        <form onSubmit={handleUpdateProfilePhoto}>
          <img
            className="w-[250px] h-[200px] rounded-full"
            src={user?.photo === "" ? userImg : user?.photo}
            alt=""
          />
          <input type="file" name="photo" id="" />
          <button type="submit" className="bg-white text-black">
            {loading ? <ClipLoader color="#36d7b7" size={17} /> : <></>}
            Update profile photo
          </button>
        </form>
        <div className="mt-5">
          <h1 className="text-xl">Name : {user?.name}</h1>
          <h1 className="text-xl">Email : {user?.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
