import { Link, useParams} from 'react-router-dom';

import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';




const Show =() =>{

    const { showId } =   useParams();
    const {data:showData,error:showError} = useQuery({
              queryKey : ['show',showId],
              queryFn: () => getShowById(showId),
              refetchOnWindowFocus:false,
        })


//    const navigateTo = useNavigate();
//   // const {showData, showError} =useShowById(showId);
//     const onGoBack = () =>{

//         navigateTo('/');

//     }

    if(showError){
        return <div>we have error : {showError.message} </div>
    }

    if(showData){
        return <div> 
        {/* got show data : {showData.name}  */}

        <Link to="/">Go back to Home</Link>  
        {/* <button type="button" onClick={onGoBack}
         >Go back to home</button> */}

        <ShowMainData 
         image={showData.image}
         name={showData.name} 
         rating={showData.rating} 
         summary={showData.summary} 
         genres={showData.genres} />

        <div>
            <h2>
                detailsss </h2>
                <Details 
                 status={showData.status}
                 premiered={showData.premiered} 
                 network={showData.network} />
           
        </div>
        <div>
            <h2>seasons</h2>
            <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
            <h2>cast</h2>
            <Cast  cast={showData._embedded.cast} />
        </div>
        </div>
    }
    
    return (
        <div>
            data is loading
        </div>
    )
   
};

export default Show