    import "./stories.scss"

//    Temporaty data
    const stories =[
        {
            id:1,
            name:"Mesroua Djamel",
            img:"https://images.pexels.com/photos/20802886/pexels-photo-20802886/free-photo-of-rouge-amour-ete-soleil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            name:"Other User 1",
            img:"https://images.pexels.com/photos/21919160/pexels-photo-21919160/free-photo-of-lumineux-leger-nature-ciel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:3,
            name:"Other User 2",
            img:"https://images.pexels.com/photos/20552019/pexels-photo-20552019/free-photo-of-mer-aube-soleil-couchant-coucher-de-soleil.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id:4,
            name:"Other User 3",
            img:"https://images.pexels.com/photos/21712473/pexels-photo-21712473/free-photo-of-mer-vol-aube-soleil-couchant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];


        
    
const Stories = () =>{

   
    return(
        <div className="stories">
            {stories.map(story=>(
                    <div className="story">
                        <img src={story.img} alt="Image Story" />
                        <span>{story.name}</span>
                    </div>
                )
            )}
        </div>
    );
}

export default Stories