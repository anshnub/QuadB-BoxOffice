import { useParams } from 'react-router-dom';

import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';




const Show =() =>{

    const { showId } =   useParams();
    const {data:showData,error:showError} = useQuery({
              queryKey : ['show',showId],
              queryFn: () => getShowById(showId),
        })

  // const {showData, showError} =useShowById(showId);


    if(showError){
        return <div>we have error : {showError.message} </div>
    }

    if(showData){
        return <div> got show data : {showData.name} </div>
    }
    
    return (
        <div>
            data is loading
        </div>
    )
   
};

export default Show