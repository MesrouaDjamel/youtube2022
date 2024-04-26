
import "./posts.scss"

import Post from "../post/post";
const Posts = () => {
    // Temporary Data 

    const posts = [
        {
            id:1,
            name:"Mesroua Djamel",
            userId:1,
            profilePic : "https://images.pexels.com/photos/20742290/pexels-photo-20742290/free-photo-of-nature-amour-fleurs-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "This tutorial is very usefull to learn React js ",
            img:"https://images.pexels.com/photos/20742290/pexels-photo-20742290/free-photo-of-nature-amour-fleurs-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            name:"Other User 3",
            userId:3,
            profilePic : "https://images.pexels.com/photos/21352676/pexels-photo-21352676/free-photo-of-bois-paysage-eau-flot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Most usefull tutorial ever seen ",
            img:"https://images.pexels.com/photos/21352676/pexels-photo-21352676/free-photo-of-bois-paysage-eau-flot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:3,
            name:"Other User 2",
            userId:2,
            profilePic : "https://images.pexels.com/photos/21952599/pexels-photo-21952599/free-photo-of-bois-lumineux-leger-plage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "How to upgrade your skill with react Js",
            img:"https://images.pexels.com/photos/21952599/pexels-photo-21952599/free-photo-of-bois-lumineux-leger-plage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:4,
            name:"Other User 1",
            userId:2,
            profilePic : "https://images.pexels.com/photos/20894965/pexels-photo-20894965/free-photo-of-amour-ete-jardin-feuille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "This tutorial is very usefull to learn React js ",
            img:"https://images.pexels.com/photos/20894965/pexels-photo-20894965/free-photo-of-amour-ete-jardin-feuille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]
    return(
        <div className="posts">
            {
                posts.map(post=>(
                    <Post post={post}  key={post.id}/>
                    
                ))
            }
        </div>
    )
}
export default Posts