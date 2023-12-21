import React from "react";
import '../Popaps/popap1.css';
import './Creat.css'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const Creat=({visible, onClose})=>{
 
  const navigate=useNavigate()

    if (!visible) return null
    return(
        <div className="creat-main">
          <CloseIcon className="button" onClick={()=>onClose(navigate(-1))}/>
          <div className="Creat-box">
            <div className="title">Crate New post</div>
            <div className="creat-box-imges">
              <div className="double-imges">
            <img className="two" src="https://th.bing.com/th/id/OIP.3nAYuvjWvj2gipkYpL9qLQHaHa?rs=1&pid=ImgDetMain"/>
            <img className="one" src="https://th.bing.com/th/id/OIP.CvgUmQ78VftEbvp8NbxdlAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain"/>
            </div>
            <div className="sub-title">Drag photos and videos here</div>
            <div className="btn btn-primary" type="file" name="file uppload">select from computer</div>
            </div>
          </div>
        </div>
    )
}

export default Creat