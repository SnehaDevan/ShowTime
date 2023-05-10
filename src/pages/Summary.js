import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './Summary.css'
function Summary() {
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState('');
  const [showTitle, setShowTitle] = useState('');
  const [showId, setShowId] = useState('');



  useEffect(() => {
    const fetchShowSummary = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShowSummary(response.data.summary);
      setShowTitle(response.data.name);
      setShowId(response.data.id);


    };
    fetchShowSummary();
  }, [id]);

  return (
    <div className='Summary_Container'>
        <div className='Summary_Title'>{showTitle}</div>
        <div className='Summary_Content'>
                <div className='Summary_Summary'>{showSummary}</div>
        </div>                
        <div className='Summary_Button'>
             <button>
                <Link to={`/book/${showId}`} className='BookMovieButton'>
                        Book Movie
                </Link>
             </button>
        </div>
    </div>
  );
}

export default Summary;
