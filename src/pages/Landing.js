import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import{FaFilm} from 'react-icons/fa'
import './Landing.css'
function Landing() {
    const [records, setRecords] =useState([])

    useEffect(() =>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])

  return (
    <div className='Landing_Container'>
        <div className='Landing_Heading'>
           <div className='Landing_Icon1'>
            <FaFilm color='white' size={90}/>
           </div>
           <div className='Landing_Heading_Text'>
                <h1>ShowStory</h1>
                <h1>It's Show Time!</h1>
           </div>  
           <div className='Landing_Icon1'>
            <FaFilm color='white' size={90}/>
           </div> 
        </div>
        <div className='Landing_Show'>
            {records.map((list, index) => (
                <div className='Landing_ShowContent' key={index}>
                        {list.show.image && (
                            <img src={list.show.image.medium} alt={list.show.name} />
                        )}
                        <div className='ShowName'>Name : {list.show.name}</div>
                        <div className='ShowLanguage'>Language : {list.show.language}</div>
                        <div className='ShowGenre'>Genre : {list.show.genres.join(", ")}</div>
                        <div className='ShowRunTime'>Premiered Date : {list.show.premiered}</div>
                        
                        <button classname='Show_Button'type='Regular'>
                            <Link to={`/summary/${list.show.id}`} className='KnowMoreButton'>
                                Know More!
                            </Link>
                        </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Landing
