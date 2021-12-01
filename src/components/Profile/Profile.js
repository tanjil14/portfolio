import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import img from "../../assets/Images/1.jpg"
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Md Tanjil Ahmed</Typography>
        <Typography className="title">MERN Stack Developer</Typography>

        <figure className="profile_image">
          <img src={img} alt="" />
        </figure>

        <div className="profile_information">
          Insert Time line
          <br />
          <button>My button</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
