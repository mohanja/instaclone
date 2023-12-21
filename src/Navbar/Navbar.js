import React,{useState} from "react";
import './Navbar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Uploaded from '../Creat/Creat';
import { Route, Routes,Link, useNavigate } from "react-router-dom";
import Center from "../Center";
import ReelsSub from "../ReelsSub";
import ExSub from "../ExSub";
import CreSub from "../CreSub";
import Profile from "../Profile/Profile";
import NewFunction from "../Profile/Save";
import NewFunction_1 from "../Profile/Tagged";



const Navbar=()=>{
  const navigate=useNavigate()
const [pop, setPop] = useState(false)
const handelClose2 = () => setPop(false)
    return(
        <>
         
        <Uploaded onClose={handelClose2} visible={pop}/>
        <div className="header">
            {/* system */}
            <div className="logo"><Link to='/' className="logo-link nav-linked"><InstagramIcon className="icons" style={{fontSize:'1.9rem'}} /><img className="Nav-name" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"/></Link></div>
            <nav className="navbars">
              <ul className="fist-items">
                <li><Link to='/' className="nav-linked"><HomeRoundedIcon className="icons" style={{fontSize:'1.9rem'}}/><div className="Nav-name">home</div></Link></li>
                <li><Link to='/' className="nav-linked"><SearchRoundedIcon className="icons" style={{fontSize:'1.9rem'}}/><div className="Nav-name">search</div></Link></li>
                <li><Link to='/explore' className="nav-linked"><ExploreRoundedIcon className="icons" style={{fontSize:'1.7rem'}}/><div className="Nav-name">explore</div></Link></li>
                <li><Link to='/reels' className="nav-linked"><MovieCreationIcon className="icons" style={{fontSize:'1.7rem'}}/><div className="Nav-name">reels</div></Link></li>
                <li><Link to='/' className="nav-linked"><ChatBubbleIcon className="icons" style={{fontSize:'1.7rem'}}/><div className="Nav-name">messages</div></Link></li>
                <li><Link to='/' className="nav-linked"><FavoriteBorderIcon className="icons" style={{fontSize:'1.7rem'}}/><div className="Nav-name">notification</div></Link></li>
                <li  onClick={() => setPop(true)} ><Link to='/creat' className="nav-linked"><AddBoxIcon className="icons" style={{fontSize:'1.7rem'}}/><div className="Nav-name">create</div></Link></li>
                <li><Link to='/profile' className="nav-linked"><AccountCircleIcon className="icons" style={{fontSize:'1.7rem'}}/><div className="Nav-name">profile</div></Link></li>
              </ul>  
              <ul className="scecond-items">
              {/* <li><a href="#" className="nav-linked"><MenuIcon className="icons" style={{fontSize:'1.9rem'}}/><div>threads</div></a></li> */}
                <li><a href="#" className="nav-linked"><MenuIcon className="icons" style={{fontSize:'1.9rem'}}/><div className="Nav-name">more</div></a></li>
              </ul>
            </nav>
            <nav style={{display:"none"}}>

            </nav>
        </div>
        <Routes>
         
          <Route path="/" element={<Center/>}/>
          <Route path="/reels" element={<ReelsSub/>}/>
          <Route path="/explore" element={<ExSub/>}/>
          <Route path="/creat" element={<CreSub/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/save" element={<NewFunction/>}/>
          <Route path="/tagged" element={<NewFunction_1/>}/>
          
        </Routes>
        </>
    )
}

export default Navbar