import "./comments.scss"

const Comments = () => {

    const comments = [
        {
            id:1,
            desc: "Yes I comfirm this tutorial is so usefull, Yes I comfirm this tutorial is so usefull, ",
            name:"Mesroua Djamel",
            userId:1,
            profilePic : "https://images.pexels.com/photos/20742290/pexels-photo-20742290/free-photo-of-nature-amour-fleurs-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            desc: "Yes, It Is",
            name:"Other User 3",
            userId:3,
            profilePic : "https://images.pexels.com/photos/21352676/pexels-photo-21352676/free-photo-of-bois-paysage-eau-flot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:3,
            desc: "You can show some channel in Youtube",
            name:"Other User 2",
            userId:2,
            profilePic : "https://images.pexels.com/photos/21952599/pexels-photo-21952599/free-photo-of-bois-lumineux-leger-plage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:4,
            desc: "Yes react is a Js Library devlopped by Facebook, you need to learn it ",
            name:"Other User 1",
            userId:2,
            profilePic : "https://images.pexels.com/photos/20894965/pexels-photo-20894965/free-photo-of-amour-ete-jardin-feuille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]

    return(
        <div className="comments">
                <div className="write">
                <img src="https://images.pexels.com/photos/20742290/pexels-photo-20742290/free-photo-of-nature-amour-fleurs-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Pic" />
                <input type="text"  placeholder="Add Your Comment ..."/>
                <button>Send</button>


                </div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePic} alt="Profile Pic" />
                    
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>

                        <span className="date">1 Hour ago</span>

                    </div>
                ))
            }
        </div>
    )
}

export default Comments

