import React,{useState} from "react";
import video from "../Videos/video.mp4";
import '../Reels/reels.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import PopapTow from "../Popaps/Popap1 copy";
import Popap from "../Popaps/Popap";

const Reels=({list})=>{

    const [heart, setHeart] = useState(false)
    const [save, setSave] = useState(false)
    const [pop, setPop] = useState(false)
    const [poptow, setPoptow] = useState(false)
    const [row, setRow] = useState(".more")
    const [color, setColor] = useState("rgb(126, 126, 126)")
    const red = heart ? "red" : "white";
    const black = save ? "black" : "white"

    const onclickTow = (commend) => {
        setColor("white")
        setRow(commend.slice(100))
    }
    const clikcHeaCount = () => {

        setHeart(!heart)
    }
    const handelClose = () => setPop(false)
    const handelClose2 = () => setPoptow(false)

    return(
        <>
        <div  className="reels-main">
            <div className="reels-video" >
            <video controls={true} autoPlay>
                <source src={list.video}/>
            </video>
            <div className="reels-buttom">
            <div className="reels-l-n-f">
                <img src={list.avadhar}/>
                <div className="reels-name">{list.name}</div>
                <div className="reels-p-btn">
                <div className="reels-point"></div>
                <button className="btn">follow</button>
                </div>
            </div>
            <div className="reels-comment">
            <span className="commed">{list.commen.length > 100 ? list.commen.slice(0, 100) : list.commen} <a className="content-more" style={{ color: color }} onClick={() => onclickTow(list.commen)} >{row}</a></span>
            </div>
            <div className="reels-icon-a-lo">
                <MusicNoteIcon fontSize="small"/>
                <marquee className="reels-run">{list.music}</marquee>
                <div className="reels-audio">{list.orignal}</div>
            </div>
            </div>
            </div>
            <div className="reels-icon-list">
            <div className="reels-like-count">
            <FavoriteBorderIcon onClick={() => clikcHeaCount()} style={{ fontSize: '1.7rem', backgroundColor: red, borderRadius: "50%" }} />
            <div className="content-count">{heart === true ? list.counts + 1 : list.counts} likes</div>
            </div>
            <CommentIcon className="icon-reel" onClick={() => setPop(true)} style={{ fontSize: '1.7rem'}} />
            <SendIcon className="icon-reel" style={{ fontSize: '1.7rem' }} />
            <BookmarkBorderIcon onClick={() => setSave(!save)} style={{ fontSize: '2rem', backgroundColor: black }} />
            
            <div className="content-share" onClick={() => setPoptow(true)}>
                            <div className="content-point three"></div>
                            <div className="content-point three"></div>
                            <div className="content-point three"></div>
            </div>
            <div className="reel-audio-box">
              <img src={list.song}/>
            </div>
            </div>
        </div>
        <PopapTow onClose={handelClose2} visible={poptow} />
        <Popap onClose={handelClose} visible={pop} list={list} />
       
        </>
    )
}
export default Reels