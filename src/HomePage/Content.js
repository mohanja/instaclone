import React, { useState } from "react";
import { Player, ControlBar, PlayToggle } from 'video-react';
import './Content.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import EmojiPicker from 'emoji-picker-react';
import Popap from "../Popaps/Popap";
import { Score } from "@mui/icons-material";
import PopapTow from "../Popaps/Popap1";

const Content = ({item,index}) => {


    const [heart, setHeart] = useState(false)
    const [save, setSave] = useState(false)
    const [pop, setPop] = useState(false)
    const [poptow, setPoptow] = useState(false)
    const [count, setCount] = useState()
    const [row, setRow] = useState(".more")
    const [color, setColor] = useState("rgb(126, 126, 126)")
    const red = heart ? "red" : "white";
    const black = save ? "black" : "white"

    const onclickTow = (commed) => {
        setColor("black")
        setRow(commed.slice(100))
    }
    const clikcHeaCount = () => {

        setHeart(!heart)
    }
    const handelClose = () => setPop(false)
    const handelClose2 = () => setPoptow(false)


    const content = "What Can State HoldThe useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.  "
    return (
        <>
            <div className="content">
                <div className="content-items" key={index} >
                    <div className="content-top">
                        <div className="content-logo">
                            <div className="cotent-mt1">
                                <div className="content-mt2">
                                    <img src={item.avadhar} />
                                </div>
                            </div>
                            <div className="content-name">{item.name}</div>
                            <div className="content-point single"></div>
                            <div className="content-time">{item.date}</div>
                        </div>

                        <div className="content-share" onClick={() => setPoptow(true)}>
                            <div className="content-point three"></div>
                            <div className="content-point three"></div>
                            <div className="content-point three"></div>
                        </div>
                    </div>

                    <div className="content-main">
                         {item.post ? <img src={item.post} /> :<video controls={false} autoPlay><source src={item.video} type="video/mp4" /></video>} 
                    </div>
                    <div className="content-bottom">
                        <div className="content-hcs">
                            <FavoriteBorderIcon onClick={() => clikcHeaCount(item.id)} style={{ fontSize: '1.7rem', backgroundColor: red, marginRight: '12px', borderRadius: "50%" }} />
                            <CommentIcon className="icon2" onClick={() => setPop(true)} style={{ fontSize: '1.7rem', marginRight: '14px' }} />
                            <SendIcon className="icon" style={{ fontSize: '1.7rem' }} />
                        </div>
                        <div className="content-save">
                            <BookmarkBorderIcon onClick={() => setSave(!save)} style={{ fontSize: '2rem', backgroundColor: black }} />
                        </div>
                    </div>
                    <div className="content-count">{heart === true ? item.counts + 1 : item.counts} likes</div>
                    <div className="content-content">
                        <b>{item.name}</b> <span className="commed">{item.commen.length > 100 ? item.commen.slice(0, 100) : item.commen} <a className="content-more" style={{ color: color }} onClick={() => onclickTow(item.commen)} >{row}</a>
                        </span>
                    </div>
                    <div className="content-view-com" style={{cursor:"pointer"}}  onClick={() => setPop(true)}>15 view commed</div>
                    <div className="content-input">
                        <form>
                            <textarea placeholder="add command" />
                        </form>
                        <div><SentimentSatisfiedIcon className="content-emoj" /></div>
                    </div>
                </div>

            </div>
            <Popap onClose={handelClose} visible={pop} list={item} />
            <PopapTow onClose={handelClose2} visible={poptow}/>
        </>
    )
}

export default Content