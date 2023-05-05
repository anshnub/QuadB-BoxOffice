import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "../components/SearchForm";
import { searchForShows,searchForPeople } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import ActorsGrid from "../components/actors/ActorsGrid";

const Home = () => {

    const [filter, setFilter] = useState(null)

    const { data:apiData , error :apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () => filter.searchOption==='shows' ? searchForShows(filter.q):searchForPeople(filter.q),
        // ⬇️ disabled as long as the filter is empty
        enabled: !!filter,
        refetchOnWindowFocus:false,
        
    })
    // const [searchStr,setSearchStr]=useState("");
    
    // const [searchOption,setSearchOption] = useState('shows')
    // const [apiDataError,setApiDataError] = useState(null);
    // const [apiData,setApiData] = useState(null);

   

   
    
    const onSearch =async ({q,searchOption}) =>{
        setFilter({q,searchOption})

        // try {


        //     setApiDataError(null);

        //     if(searchOption==='shows'){
        //     const result = await searchForShows(q);
        //     setApiData(result);
        //     }
        //     else{
        //         const result = await searchForPeople(q);
        //     setApiData(result);
        //     }
            
        // } catch (error) {
        //     setApiDataError(error);
            
        // }

       
       
    };

    const renderApiData = () => {

        if(apiDataError){
            return <div>Error occured : {apiDataError.message}</div>
        }

        if(apiData?.length===0){
            return <div>No result</div>
        }

        if(apiData) {
            return apiData[0].show ?   <ShowGrid shows={apiData} /> : <ActorsGrid actors={apiData} />
        }

        return null;

    }

    return(
         <div>

         <SearchForm onSearch={onSearch} />
{/* 
    <form onSubmit={onSearch}>  

    <input type="text" value={searchStr} onChange={onSearchInputChange} />

    <label >
     shows
        <input type="radio" name="search-option" value="shows" checked={searchOption==='shows'} onChange={onRadioChange} />
    </label>

    <label >
     actors
        <input type="radio" name="search-option" value="actors" checked={searchOption==='actors'} onChange={onRadioChange} />
    </label>

    <button type="submit" >search here</button>
    </form> */}

    <div>
        {renderApiData ()}
        
    </div>
    
    </div>
    )
}

export default Home ;