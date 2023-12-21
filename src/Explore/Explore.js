import React from "react";
import './Explore.css'

const Explore=({ list})=>{

    const flew=list.id%2?"row-reverse":null;
    

    return(
    <div  className="Expor-main"  style={{display:"flex",flexDirection:flew}} >
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex"}}>
           
       <img className="Explore-img" src={list.img1}/>

       <img className="Explore-img" src={list.img2}/>
       </div>
       <div style={{display:"flex"}}>
        
       <img className="Explore-img" src={list.img3}/>
       <img className="Explore-img" src={list.img4}/>
       </div>
       </div>
       <video  className="Explore-video"  controls ><source src={list.video5}/></video>
        </div>
    )

}

export default Explore