import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Request = ({list}) => {

    const [save, setSave] = useState(false)
    const[follow,setFollow]=useState("follow")
    const followers=follow?"follow":"following";

    const black = save ? "black" : "#0d6efd"
    const clikcFollwers = () => {
       setSave(!save)
        setFollow(!follow)
    }
    
    return (
        <>

                     
                    <div  className="request length">
                    <div className="request-request">
                      <div className="content-to">
                        <div className="size1">
                            <div className="size2">
                                <div className="size3">
                                    <img src={list.avadhar} />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="request-names">
                <div className="name1">
                    <b >{list.name}</b>
                </div> 
                <div className="samll-content">{list.small}</div> 
                </div>
                </div>
                <div className="follow-btn"onClick={()=>clikcFollwers()} style={{color:black}} >{followers}</div>
                
                </div>
      
        
     </>
            )
}

export default Request