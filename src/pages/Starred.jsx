import { useStarredShows } from "../lib/useStarredShows";

const Starred =() =>{

    const[starredShows]= useStarredShows();
       


    return (
        <div>
            hello starred page,starred {starredShows.length}
        </div>
    )
   
};

export default Starred