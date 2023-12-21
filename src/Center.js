import React, { useState } from "react";
import Content from "./HomePage/Content";
import Top from "./TopSlider/Top";
import Navbar from "./Navbar/Navbar"
import video from "./Videos/video.mp4"
import Requst from './Request/Requst';
import Sroll from './Slider/slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';

import { Provider, useSelector } from "react-redux";
import './App.css'
const Center = () => {

    // const [list,setList] =useState( [
    //     {
    //         id: 1,
    //         name: "vijay",
    //         avadhar: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
    //         date: "2d",
    //         post: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
    //         counts: 50,
    //         commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."

    //     },
    //     {
    //         id: 2,
    //         name: "sillent_kill",
    //         avadhar: "https://celebswiki.info/wp-content/uploads/2020/03/Hrithik-Roshan-Biography-1024x1024.jpg",
    //         date: "2d",
    //         video:"",
    //         counts: 30,
    //         commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."

    //     }
    //     ,
    //     {
    //         id: 3,
    //         name: "mr_waiter",
    //         avadhar: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg",
    //         date: "2d",
    //         post: "https://th.bing.com/th/id/OIP.hqgXmy-r13g-63xcvlz6AwHaE7?w=2048&h=1364&rs=1&pid=ImgDetMain",
    //         counts: 20,
    //         commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."

    //     },
    //     {
    //         id: 4,
    //         name: "simley_killer",
    //         avadhar: "https://th.bing.com/th/id/R.9ad2af6000f237fb480b99d2724f9588?rik=NHXca9WiC7fl2Q&riu=http%3a%2f%2fbeauty-around.com%2fimages%2fsampledata%2fBollywood_Actress%2fpriyanka-chopra.jpg&ehk=cj2hCb55t%2fI8A7sUyGuWdRe9hZ%2bOUA15Glq%2fhmu8VqI%3d&risl=&pid=ImgRaw&r=0",
    //         date: "2d",
    //         post: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
    //         counts: 500,
    //         commen: "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values."

    //     }
    // ])

    // const [lists, setLists] = useState([
    //     {
    //         id: 1,
    //         name: "brid_pinky",
    //         avadhar: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg",
    //         small:"i love brids"


    //     },
    //     {
    //         id: 2,
    //         name: "wick",
    //         avadhar: "https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg",
    //         small:"travelars"

    //     }
    //     ,
    //     {
    //         id: 3,
    //         name: "john",
    //         avadhar: "https://th.bing.com/th/id/OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK?rs=1&pid=ImgDetMain",
    //         small:"artiesh"

    //     },
    //     {
    //         id: 4,
    //         name: "petar",
    //         avadhar: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    //         small:"photograper"
    //     }
    // ])

    const { main = [] } = useSelector((state) => state.Main)
    const { request = [] } = useSelector((state) => state.List)
    const [swiperRef, setSwiperRef] = useState(null);
    return (
    <>    
       <div className="home-three">
            <div className="double">

{/* Home page status whating */}
                <Top />
                {main.map((value, index) =>
                    <Content key={index} item={value} />
                )}

{/* Home page follower slider */}   
           
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    virtual>
                    {request.map((list) =>
                        <SwiperSlide>
                            < Sroll list={list} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

{/* Home page request place */}

            <div className="postion">
                <div className="request">
                    <div className="request length">
                        <div className="request-request">
                            <div className="content-to">
                                <div className="size1">
                                    <div className="size2">
                                        <div className="size3">
                                            <img src="https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-names">
                                <div className="name1">
                                    <b >mohanram123</b>
                                </div>
                                <div className="samll-content">mohanram</div>
                            </div>
                        </div>
                        <div className="follow-btn" >switch</div>

                    </div>
                    <div className="request request-request samll-content">
                        <div>Suggested for you</div>
                        <div>See All</div>
                    </div>
                    {request.map((list) => <Requst list={list} />
                    )}
                </div>
            </div>
        </div>
    </>
    )
}

export default Center