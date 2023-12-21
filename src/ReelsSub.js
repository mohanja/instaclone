import React,{useState} from "react";
import Reels from "./Reels/Reels";
import video from "./Videos/video.mp4"
import video2 from "./Videos/video1.mp4"
import video3 from "./Videos/video3.mp4"
import video4 from "./Videos/video4.mp4"
import { Provider, useSelector } from "react-redux";

const ReelsSub=()=>{


  const {reels=[]}=useSelector((state)=>state.Reels)
    // const[reels,setReels]=useState([
    //     {
    //       id:2,
    //       video:video,
    //       avadhar:"https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-hd-3d-nature-images-download.jpg",
    //       name:"papa_23",
    //       commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
    //       counts:5,
    //       music:"leo leo leo leo",
    //       orignal:"Original audio",
    //       song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
    //     },
    //     {
    //       id:3,
    //       video:video2,
    //       avadhar:"https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg",
    //       name:"hunter_23_kill",
    //       commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
    //       counts:40,
    //       music:"leo leo leo leo",
    //       orignal:"Original audio",
    //       song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
    //     },
    //     {
    //       id:4,
    //       video:video3,
    //       avadhar:"https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
    //       name:"the_boys",
    //       commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
    //       counts:5,
    //       music:"leo leo leo leo",
    //       orignal:"Original audio",
    //       song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
    //     }
    //     ,  {
    //       id:5,
    //       video:video4,
    //       avadhar:"https://th.bing.com/th/id/R.41d62814ca1dadddfc751e79bfcef6d1?rik=i%2b7e2rzsN46n0Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f01%2fbeautiful-wallpaper-29.jpg&ehk=H4ckWzqVL%2fG9j9pIIJnQZb6%2frR2nO5xS%2bFpwVgSkfYo%3d&risl=&pid=ImgRaw&r=0",
    //       name:"dj_king",
    //       commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
    //       counts:900,
    //       music:"leo leo leo leo",
    //       orignal:"Original audio",
    //       song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
    //     }
    //   ])
      
    return(
        <div className="postion-reels">
            {reels.map((list)=> <Reels  list={list}/>)}
        </div>
    )
}

export default ReelsSub