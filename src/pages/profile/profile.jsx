import Posts from "../../components/posts/Posts"

import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import X from "@mui/icons-material/X";




const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        
            <img  className ="cover" src="https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cover Image" />

            <img className="profileImg" src="https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Picture profile" />
      </div>

      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <FacebookOutlinedIcon className="facebook"/>
            <LinkedInIcon/>
            <InstagramIcon/>
            <PinterestIcon/>
            <XIcon/>
          </div>

          <div className="center">
            <span>Mesroua Djamel</span>
            <div className="info">
              <div className="item">
                  <PlaceIcon/>
                  <span>Algieria</span>
              </div>

              <div className="item">
                  <LanguageIcon/>
                  <span>Djamel.dev</span>
              </div>

            </div>

              <button>Follow</button>



          </div>

          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />

          </div>

        </div>
      </div>
      <Posts/>

      
      
      
    </div>
  )
}

export default Profile