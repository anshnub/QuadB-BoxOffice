import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
const Show =() =>{

    const { showId } =   useParams();

    const [showData,setShowData] =useState(null);

    const[showError,setShowError] =useState(null);

    useEffect(() => {

        async function fetchData(){

            try {
                const data = await getShowById(showId)
                setShowData(data);
                
            } catch (err) {
                setShowError(err);
                
            }


            

            
        }

        fetchData();


    }, [showId])

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