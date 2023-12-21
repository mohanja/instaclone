import React from "react";
import './popap1.css'
import CloseIcon from '@mui/icons-material/Close';
const PopapTow=({visible, onClose})=>{

    if (!visible) return null
    return(
        <div className="main">
            
          <div className="share-box related">
                <div className="list-share red">report</div>
                <div className="list-share red">unfollow</div>
                <div className="list-share">add to favoites</div>
                <div className="list-share">go ot post</div>
                <div className="list-share">share to...</div>
                <div className="list-share">copy link</div>
                <div className="list-share">embed</div>
                <div className="list-share">about this account</div>
                <div className="list-share"  onClick={onClose}>cancel</div>

          </div>
        </div>
    )
}

export default PopapTow