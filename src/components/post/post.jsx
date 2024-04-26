import "./post.scss"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({post}) => {
  const [commentOpen, setCommentOpen] = useState(false);
  
  
    return(
        <div className="post">
                        <div className="user">
                            <img src={post.profilePic} alt="Profil Pic" />
                            <div className="userInfo">
                                
                                <span>{post.name}</span>
                                <span className="time">A few second ago</span>
                            </div>
                            
                        </div>

                        {post.desc}
                        <img src={post.img} alt="Image " />

                        <div className="interaction">
                            <div className="social">
                               <ThumbUpIcon/>  
                                <span>Likes</span>
                            </div>

                            <div className="social"  onClick = {()=>setCommentOpen(!commentOpen)}>
                                <FavoriteBorderIcon/>   
                                <span>Comments</span>
                            </div>
                          
                            <div className="social">
                                <ScreenShareOutlinedIcon/>    
                                <span>Shares</span>
                            </div>

                        </div>
                        { 
                        commentOpen && <Comments />
                        }

                    </div>
    )
}

export default Post