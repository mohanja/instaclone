import React, { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Top.css'


const Top = () => {

const[move,setMove]=useState()

    const list=[
        {

            id:1,
            img:"https://th.bing.com/th/id/OIP.adS2oTrIVO5LD0j-gSeVtQHaE8?rs=1&pid=ImgDetMain",
            name:"mohanram_123"
         }
         ,
         {

            id:2,
            img:"https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            name:"slient_killer_555"
         }
         ,
         {

            id:3,
            img:"https://th.bing.com/th/id/R.51857f6e286ea7ecb4dfd33cfc393429?rik=hWYo%2b6xt9WdVbQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fNature-pictures-2.jpg&ehk=St9xP8TwuWIINARR8qLQdjUZBiqyXeoSlddb%2bXFUsdk%3d&risl=&pid=ImgRaw&r=0",
            name:"_mr_unlucky_prenson"
         },
         {

            id:4,
            img:"https://th.bing.com/th/id/OIP.OjNHJL6A-Lzw_jLJfFgtMwAAAA?rs=1&pid=ImgDetMain",
            name:"_king_killer"
         }
         ,
         {

            id:5,
            img:"https://www.wallpapers13.com/wp-content/uploads/2019/07/Sunrise-landscape-photography-early-morning-swamp-evaporation-streaming-sky-Download-4k-wallpaper-images-for-your-desktop-background-1920x1200.jpg",
            name:"_wallter_vel"
         }
         ,        {

            id:6,
            img:"https://th.bing.com/th/id/R.3084e91aea4bff396ef763d4f25002ca?rik=mAkO%2f%2bHjF5SaWA&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fAutumn-Background.jpg&ehk=tMoovE%2bRoWWBIjvHSYggROxRXDtMXXySZ9jBfxMESXk%3d&risl=1&pid=ImgRaw&r=0",
            name:"mohanram23"
         }
         ,
         {

            id:7,
            img:"https://th.bing.com/th/id/R.78a13c9eb31108addb76f77ada4589ff?rik=b%2fIodCIvyGbxCA&riu=http%3a%2f%2ffiles.all-free-download.com%2fdownloadfiles%2fwallpapers%2f1920_1080%2fpeaceful_lake_wallpaper_landscape_nature_1208.jpg&ehk=6EYMLnN48Cs4mGNjCqvvjwaPz6MF2KRLIUOhJG57Z8g%3d&risl=&pid=ImgRaw&r=0",
            name:"_sakthi_#tag"
         }
         ,        {

            id:8,
            img:"https://images.designtrends.com/wp-content/uploads/2016/01/06094121/Spring-Landscape-Background1.jpg",
            name:"_billa_mass"
         }
]

    
    return (
        <>
            <div className="nav-list">
           <div className="prev">
           <ArrowBackIosNewIcon/>
           </div>
              {list.map((data)=>
              <li key={data.id}>
                    <div className="baground">
                        <div className="round">
                            <img src={data.img} />
                        </div>
                    </div>
                    <div className="name">{data.name.length>10?data.name.slice(0,10)+"...":data.name}</div>
                </li> )}
                <div className="next">
                <ArrowForwardIosIcon/>
                </div>
            </div>
        </>
    )
}

export default Top