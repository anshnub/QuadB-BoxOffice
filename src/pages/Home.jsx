import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { searchForShows,searchForPeople } from "../api/tvmaze";

const Home = () => {
    // const [searchStr,setSearchStr]=useState("");
    
    // const [searchOption,setSearchOption] = useState('shows')
    const [apiDataError,setApiDataError] = useState(null);
    const [apiData,setApiData] = useState(null);

   

   
    
    const onSearch =async ({q,searchOption}) =>{
        

        try {


            setApiDataError(null);

            if(searchOption==='shows'){
            const result = await searchForShows(q);
            setApiData(result);
            }
            else{
                const result = await searchForPeople(q);
            setApiData(result);
            }
            
        } catch (error) {
            setApiDataError(error);
            
        }

       
       
    };

    const renderApiData = () => {

        if(apiDataError){
            return <div>Error occured : {apiDataError.message}</div>
        }

        if(apiData) {
            return apiData[0].show ?   apiData.map((data) => 
             <div key={data.show.id} > {data.show.name}</div> 
             ) : apiData.map((data) => 
             <div key={data.person.id} > {data.person.name}</div> 
             )
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