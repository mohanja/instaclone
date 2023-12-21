import React, { useEffect, useState, useRef} from "react";
import { Player, ControlBar, PlayToggle } from 'video-react';
import './Popap.css'
import CloseIcon from '@mui/icons-material/Close';
import '../HomePage/Content.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const Popap = ({ visible, onClose, list }) => {
   
     const[add,setAdd]=useState("")
    const [heart, setHeart] = useState(false)
    const [save, setSave] = useState(false)

    if (!visible) return null
    const red = heart ? "red" : "white";
    const black = save ? "black" : "white"

    const clikcHeaCount = () => {
     setHeart(!heart)
    }
const onsumbit=(e)=>{
e.preventDefault()
setAdd(e.target.value)
}
function addValue(e){
    setAdd(e.target.value)  
}
    
 
    return (
        <div className="main">
            <CloseIcon className="button" onClick={onClose} />
            <div className="popap west">
                <div className="content-main msin-post">
                { list .post? <img src={ list .post} />:
    
                    <video controls={false} autoPlay><source src={list.video}/></video>
               }
                </div>
                <div className="commend-pop ">
                    <div className="content-top line">
                        <div className="content-logo avadhar">
                            <div className="cotent-mt1">
                                <div className="content-mt2">
                                    <img src={list.avadhar} />
                                </div>
                            </div>
                            <div className="content-name names">{list.name}</div>
                            <div className="content-point single"></div>
                            <div className="content-time">{list.date}</div>
                        </div>

                        <div className="content-share share">
                            <div className="content-point three"></div>
                            <div className="content-point three"></div>
                            <div className="content-point three"></div>
                        </div>
                    </div>
                    <div className="content-commet">
                    <div className="content-to">
                        <div className="content-logo">
                            <div className="cotent-mt1">
                                <div className="content-mt2">
                                    <img src={list.avadhar} />
                                </div>
                            </div>
                        </div>
                    </div>
                             <div className="names">
                             <b >{list.name}</b><span className="commed">{list.commen}</span>
                             <div>{add}</div>
                             </div>  
                    </div>
                <div className="likes-end">
                    <div className="content-bottom">
                        <div className="content-hcs">
                            <FavoriteBorderIcon onClick={() => clikcHeaCount(list.id)} style={{ fontSize: '1.7rem', backgroundColor: red, marginRight: '12px', borderRadius: "50%" }} />
                            <CommentIcon className="icon2" style={{ fontSize: '1.7rem', marginRight: '14px' }} />
                            <SendIcon className="icon" style={{ fontSize: '1.7rem' }} />
                        </div>
                        <div className="content-save">
                            <BookmarkBorderIcon onClick={() => setSave(!save)} style={{ fontSize: '2rem', backgroundColor: black }} />
                        </div>
                    </div>
                    <div className="content-count">{heart === true ? list.counts + 1 : list.counts} likes</div>
                    <div className="content-input" >
                        <form style={{display:"flex",alignItems:"center",justifyContent:"center"}} onSubmit={(e)=>onsumbit(e)}>
                            <textarea value={add} onChange={e=>setAdd(e.target.value)} placeholder="add command" />
                            <button type="sumbit" className="btn btn-primary">send  </button>
                        </form>
                        <div><SentimentSatisfiedIcon className="content-emoj" /></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popap