import React from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NewFunction from "./Save";
import { Route, Routes,Link } from "react-router-dom";

export const Profile = () => {

   return (
      <div className="profile">
         <div className="pro-top">
            <div className="pro-img">
               <img src="https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain" />
            </div>
            <div>
               <div className="pro-n-t-l">
                  <div className="pro-name">mohan2210</div>
                  <div className="btn btn-light colors-btn" style={{color:"black"}}>Edit profile</div>
                  <div className="btn btn-light colors-btn"style={{color:"black"}}> View archive</div>
                  <Brightness7Icon />
               </div>
               <div className="pro-p-f-f">
                  <div className="pro-post">0 post</div>
                  <div className="pro-follow">23 follow</div>
                  <div className="pro-foles">54 followes</div>
               </div>
               <div className="profile-name">Mohan Ram</div>
            </div>
         </div>

         <div className="nav">
            <div><Link to="/profile">post</Link></div>
            <div><Link to="/save">save</Link></div>
            <div><Link to="/tagged">tagged</Link></div>
         </div>

         <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div className="p-s-t" id="post">
               <CameraAltIcon style={{ fontSize: "60px", border: "1px solid black", padding: "10px", borderRadius: "50%" }} />
               <div className="share">share</div>
               <div>When you share photos, they will appear on your profile.</div>
               <div style={{ color: "#0d6efd", cursor: "pointer" }}> share your fist photo</div>
            </div>
         </div>



      </div>
   );
};


export default Profile