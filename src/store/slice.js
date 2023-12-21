import { createSlice } from "@reduxjs/toolkit";
import video from '../Videos/video.mp4'
import video2 from "../Videos/video1.mp4"
import video3 from "../Videos/video3.mp4"
import video4 from "../Videos/video4.mp4"

const List=createSlice({
    name:'List',
    initialState:{

        request:[        {
            id: 1,
            name: "brid_pinky",
            avadhar: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg",
            small:"i love brids"
    
    
        },
        {
            id: 2,
            name: "wick",
            avadhar: "https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg",
            small:"travelars"
    
        }
        ,
        {
            id: 3,
            name: "john",
            avadhar: "https://th.bing.com/th/id/OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK?rs=1&pid=ImgDetMain",
            small:"artiesh"
    
        },
        {
            id: 4,
            name: "petar",
            avadhar: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
            small:"photograper"
        }],
        main:[
            {
                id: 1,
                name: "vijay",
                avadhar: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
                date: "2d",
                post: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
                counts: 50,
                commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."
    
            },
            {
                id: 2,
                name: "sillent_kill",
                avadhar: "https://celebswiki.info/wp-content/uploads/2020/03/Hrithik-Roshan-Biography-1024x1024.jpg",
                date: "2d",
                video:video,
                counts: 30,
                commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."
    
            }
            ,
            {
                id: 3,
                name: "mr_waiter",
                avadhar: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg",
                date: "2d",
                post: "https://th.bing.com/th/id/OIP.hqgXmy-r13g-63xcvlz6AwHaE7?w=2048&h=1364&rs=1&pid=ImgDetMain",
                counts: 20,
                commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."
    
            },
            {
                id: 4,
                name: "simley_killer",
                avadhar: "https://th.bing.com/th/id/R.9ad2af6000f237fb480b99d2724f9588?rik=NHXca9WiC7fl2Q&riu=http%3a%2f%2fbeauty-around.com%2fimages%2fsampledata%2fBollywood_Actress%2fpriyanka-chopra.jpg&ehk=cj2hCb55t%2fI8A7sUyGuWdRe9hZ%2bOUA15Glq%2fhmu8VqI%3d&risl=&pid=ImgRaw&r=0",
                date: "2d",
                post: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
                counts: 500,
                commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."
    
            }
        ],
        explore:[
            {
                id: 1,
              
               img1: "https://wallsdesk.com/wp-content/uploads/2016/05/Waterfalls-Photos.jpg",
               img2: "https://th.bing.com/th/id/R.71fc55a0f2becd702cc4a893980dea57?rik=XOUhz40Jc9OcYg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images-6.jpg&ehk=BQoi8QCZQtCfHkXWT0TIAxv1vTtTO1rY7ctKskX6Xfs%3d&risl=&pid=ImgRaw&r=0",
              
              img3 : "https://th.bing.com/th/id/R.9b81663a3934071f8de09681cec0684e?rik=DEV7m%2bUbPpmL2A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCool-Nature-Background-Images-4523x2590.jpg&ehk=XxAKNdbLqeV84jakVaOYrmZWai83%2bRlxqGS7WF2x2%2bo%3d&risl=1&pid=ImgRaw&r=0",
               img4: "https://th.bing.com/th/id/R.5076c017ac8fa27df75b7034df23b8ef?rik=JaKltNNHC289tw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fgreen-nature-backgrounds.jpeg&ehk=zXCQf52wRIiC%2b%2fqf76EexwS3DBWTxiO0%2fKkLHWq7b4I%3d&risl=&pid=ImgRaw&r=0",
               video5:video
              },
              {
               id: 2,
              
              img1: "https://wallpapercave.com/wp/wp2722874.jpg",
              img2: "https://wallpapercave.com/wp/FCDgjHU.jpg",
              img3: "https://wallpaperset.com/w/full/0/d/5/183330.jpg",
              img4: "https://jooinn.com/images/beauty-of-nature-24.jpg",
              video5:video2
              }
              ,
              {
              id: 3,
              
              img1: "https://th.bing.com/th/id/OIP.MBlOJPg-beF5E6q2yR5k9gAAAA?rs=1&pid=ImgDetMain",
              img2: "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
              img3: "https://3.bp.blogspot.com/-AhBahdEd3Yg/VodhRsBc3RI/AAAAAAAAGtM/roFwvTANhmA/s1600/Red%2Bflowers%2Bgreen%2Blandscape%2Bdesktop%2Bwallpaper.jpg",
              img4: "https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0",
              video5:video3
              }
              ,
              {
              id: 4,
              
              img1: "https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
              img2: "https://th.bing.com/th/id/OIP.SQQFm-oK6Lu_eMaiGGRI1AAAAA?rs=1&pid=ImgDetMain",
              img3: "https://wallpapercave.com/wp/wp2555019.jpg",
              img4: "https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large.jpg",
              video5:video4
              }
        ],
        reels:[
            {
                id:2,
                video:video,
                avadhar:"https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-hd-3d-nature-images-download.jpg",
                name:"papa_23",
                commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
                counts:50,
                music:"leo leo leo leo",
                orignal:"Original audio",
                song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
              },
              {
                id:3,
                video:video2,
                avadhar:"https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg",
                name:"hunter_23_kill",
                commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
                counts:40,
                music:"leo leo leo leo",
                orignal:"Original audio",
                song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
              },
              {
                id:4,
                video:video3,
                avadhar:"https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
                name:"the_boys",
                commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
                counts:25,
                music:"leo leo leo leo",
                orignal:"Original audio",
                song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
              }
              ,  {
                id:5,
                video:video4,
                avadhar:"https://th.bing.com/th/id/R.41d62814ca1dadddfc751e79bfcef6d1?rik=i%2b7e2rzsN46n0Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f01%2fbeautiful-wallpaper-29.jpg&ehk=H4ckWzqVL%2fG9j9pIIJnQZb6%2frR2nO5xS%2bFpwVgSkfYo%3d&risl=&pid=ImgRaw&r=0",
                name:"dj_king",
                commen:"What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values. ",
                counts:90,
                music:"leo leo leo leo",
                orignal:"Original audio",
                song:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain"
              }
        ]
        
    },
    // reducers:{
    //     addData(state,action){
    //      state.push(action.payload)
    //     }
    // }

})

export const {addData}=List.actions;
export default List.reducer