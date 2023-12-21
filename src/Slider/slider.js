import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

export default function Scroll({list}) {

//   const [list, setList] = useState([
//     {
//         id: 1,
//         name: "mohanram123",
//         avadhar: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
//         small:"mohanji"


//     },
//     {
//         id: 2,
//         name: "mohanram123",
//         avadhar: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
//         small:"mohanji"

//     }
//     ,
//     {
//         id: 3,
//         name: "mohanram123",
//         avadhar: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
//         small:"mohanji"

//     },
//     {
//         id: 4,
//         name: "mohanram123",
//         avadhar: "https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
//         small:"mohanji"
//     }
// ])





  return (
    <>
        {/* {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
          </SwiperSlide>
        ))} */}

        <div className='slide-id'>
          <div className='slide-img-name'>
            < img src={list.avadhar}/>
            <div className='slide-name'>{list.name}</div>
          </div>
          <div className="follow-btn slide-follow">follow</div>
        </div>
    </>
  );
}
