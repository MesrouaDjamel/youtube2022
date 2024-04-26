import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="navBar">

            <div className="leftBar">
                <Link  to = "/" style={{textDecoration:"none"}}>
                    <span>SocialMedia</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <AppsOutlinedIcon/>

                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search ..."/>
                </div>
            </div>
            

            
            <div className="rightBar">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>

                <div className="user">
                    <img 
                    src="https://images.pexels.com/photos/4159669/pexels-photo-4159669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="User Image"
                    />
                    <span>Mesroua Djamel</span>


                </div>

            </div>
            




            




        </div>
    )
}

export default NavBar