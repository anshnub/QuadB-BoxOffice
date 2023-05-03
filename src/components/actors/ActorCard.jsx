

const ActorCard = ({name,image,gender,country,birthday,deathday}) =>{

    // const summaryStripped = summary 
    // ? summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')
    // :'No description';

    return (
        <div>

            <div>

            
 
           <img src={image} alt={name}/>
           </div>
           <h1>{name} {gender && `(${gender})`} </h1>
           {/* <p>{summaryStripped}</p> */}
           <p>{country ? `Comes from ${country}` : 'No country Known'}</p>

           {!!birthday &&  <p>Born {birthday} </p>  }
           <p>{deathday ?`Died ${deathday}` : 'Alive' }</p>
           <div>
          
            <button type="button"> star me </button>
           </div>
        </div>
    )
}

export default ActorCard