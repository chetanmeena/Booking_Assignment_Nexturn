import './Navbar.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../../pages/Home/Home.component';
const NavBar = () =>{
    const navigate = useNavigate();
    const [movie,setMovie] = useState("");
    const handleChange = (event) =>{
        setMovie(event.target.value);

    }
    const handleSearch = () =>{
        navigate("/BookTickets", {state : {movie}});
    }
    const handleLogin = ()=>{
        navigate("/Login");
    }
    return (
        <div>
            <div className="navbar">
               <a href='/' style={{textDecoration:'None'}}><span id="title">NexTurnBooking</span></a>
                <div className='searchbox'>
                <FontAwesomeIcon  icon={faMagnifyingGlass} />
                    
                    <div className='location-container'>
                    <input id="search-box-text" placeholder='Search for Movies , Theaters , Shows......' onChange={handleChange} />
                    <div className="location-box">
                    <input style={{background:"white"}}  value='Search' id="location-slide-down" type={"button"} onClick={handleSearch}/>
                    </div>
                    </div>
                </div>
                <div className="navitems">
                    <button className="navButton" onClick={handleLogin}>Log In</button>
                    <button className="navButton">About Us</button>
                    <button className="navButton">Contact Us</button>
                </div>
            </div>
        </div>
        
    );
}
export default NavBar;