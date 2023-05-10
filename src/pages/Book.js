import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Book.css'
function Book() {
  const { id } = useParams();
  const [showTitle, setShowTitle] = useState('');


  useEffect(() => {
    const fetchShowSummary = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShowTitle(response.data.name);

    };
    fetchShowSummary();
  }, [id]);

  return (
    <div className='Book_Container'>
        <div className='Book_Heading'>
          <h2>Grab Your Tickets Now!</h2>
        </div>
        <div className='Book_Form'>
            <div className='Book_Form_Text'>
                <form >
                <div>
                    <label htmlFor='name'>Movie Name:<input type='text' value={showTitle} readOnly/></label>
                </div>
                <div>
                    <label htmlFor='date'>Show Date:<input type='date'/></label>
                </div>
                <div>
                    <label htmlFor='location'>Location:<input type='text'/></label>
                </div>
                <div>
                    <label htmlFor='number'>Number Of Tickets:<input type='text'/></label>
                </div>
                <div>
                    <label htmlFor='time'>Show Time:<input type='text'/></label>
                </div>
                <div>
                    <label htmlFor='payment'>Payment Mode:<input type='text'/></label>
                </div>

                <button type='submit'>
                  Book Now
                </button>
                </form>
            </div>    
        </div>
     </div>
  );
}

export default Book;
