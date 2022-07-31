import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchBooking.style.css'
import { DateRangePicker } from 'react-date-range';
import {addDays} from 'date-fns';
import {format} from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faCalendar, faCalendarAlt, faCalendarDays, faTape } from '@fortawesome/free-solid-svg-icons';
import CitiesDropDown from './CitiesDropdown';
const SearchBooking = () =>{
    const location = useLocation();
    console.log(location);
    const [currentlocation,setLocation] = useState("");
    const [openDate,setOpenDate]  = useState(false);
    const handleLocation = (e)=>{
        setLocation(e.target.value);
    }
    const [date,setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
      const [movieinput,setMovieInput] = useState(location.state.movie);
      const handleInput = (e) =>{
        if(movieinput === location.state.movie){
            setMovieInput(location.state.movie)
            
        }
        else{
            setMovieInput(e.target.value)
        }
      }

    return (
    <div >
        <div className='Booking_header'>
            <div className="location_filter">
                <span id="searchbar">Search</span>
            </div>
            <div className="location_filter">
                <span className="movie_fil">Movie <FontAwesomeIcon icon={faTape}></FontAwesomeIcon></span>
                <input id="movie_input" value={movieinput} onChange={handleInput}></input>
            </div>
            <div className="location_filter">
                <span className="location_fil">location <FontAwesomeIcon icon={faArrowAltCircleDown} id='font_arrow'></FontAwesomeIcon></span>
                <CitiesDropDown id="cities_drop" />
            </div>
            
            <div className="datefilter">
                <span>Date <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon></span>
                <span id="datefil" onClick={() =>{
                    setOpenDate(!openDate)
                }}>{`${format(date[0].startDate,"dd/MM/yyyy")}`}</span>
                {openDate && <DateRangePicker
                    openDate = {true}
                    onChange={item => setDate([item.selection])}
                    showSelectionPreview={true}
                    showMonthAndYearPickers={false}
                    moveRangeOnFirstSelection={false}
                    showPreview={false}
                    months={1}
                    ranges={date}
                    direction="horizontal"
                    className='calender'
                />}
            </div>
            <div className="location_filter">
                <button>filter</button>
            </div>

        
        </div>
        
    </div>

    )
}
export default SearchBooking;