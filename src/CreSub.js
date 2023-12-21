import { YouTube } from "@mui/icons-material";
import React from "react";
import video from './Videos/video.mp4'
import ReactPlayer from 'react-player/youtube'
const CreSub=()=>{
    return(
        <div className="creat-main">
           <ReactPlayer
          
           url={video}
           config={
            {
           YouTube:{
            playerVars: { showinfo: 1 }
           }
            }
           }
           />
        </div>
    )
}

export default CreSub