import "./leftBar.scss"

import Friends from "../../assets/1.png" 
import Groups from "../../assets/2.png" 
import Market from "../../assets/3.png" 
import Watch from "../../assets/4.png" 
import Memories from "../../assets/5.png" 
import Events from "../../assets/6.png" 
import Gaming from "../../assets/7.png" 
import Gallery from "../../assets/8.png" 
import Videos from "../../assets/9.png" 
import Messages from "../../assets/10.png" 
import Tutorial from "../../assets/11.png" 
import Courses from "../../assets/12.png" 
import Fund from "../../assets/13.png" 
const LeftBar = () =>{
    return(
        <div className="mainLeftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img 
                        src="https://images.pexels.com/photos/4159669/pexels-photo-4159669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="User Image"
                        />
                        <span>Mesroua Djamel</span>
                    </div>

                    <div className="item">
                        <img src={Friends} alt=" photo" />
                        <span>Friends</span>
                    </div>

                    <div className="item">
                        <img src={Groups} alt=" photo" />
                        <span>Groups</span>
                    </div>

                    <div className="item">
                        <img src={Market} alt=" photo" />
                        <span>Marketplace</span>
                    </div>

                    <div className="item">
                        <img src={Watch} alt=" photo" />
                        <span>Watch</span>
                    </div>

                    <div className="item">
                        <img src={Memories} alt=" photo" />
                        <span>Memories</span>
                    </div>
                </div>

                <hr />

                <div className="menu">
                    <span>Your ShortCuts</span>

                    <div className="item">
                        <img src={Events} alt=" photo" />
                        <span>Events</span>
                    </div>

                    <div className="item">
                        <img src={Gaming} alt=" photo" />
                        <span>Gaming</span>
                    </div>

                    <div className="item">
                        <img src={Gallery} alt=" photo" />
                        <span>Gallery</span>
                    </div>

                    <div className="item">
                        <img src={Videos} alt=" photo" />
                        <span>Videos</span>
                    </div>

                    <div className="item">
                        <img src={Messages} alt=" photo" />
                        <span>Messages</span>
                    </div>
                </div>

                <hr />

                <div className="menu">
                    <span>Others</span>
                <div className="item">
                        <img src={Tutorial} alt=" photo" />
                        <span>Tutorial</span>
                    </div>

                    <div className="item">
                        <img src={Courses} alt=" photo" />
                        <span>Courses</span>
                    </div>

                    <div className="item">
                        <img src={Fund} alt=" photo" />
                        <span>Fundraiser</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LeftBar