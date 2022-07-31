import './Description.style.css'
const Description = (props) => {
    return(
    <div className='site_details'>
        <div className='description'>
        <h1 id='site_h1'>Book Your Movie Tickets Effortlessly <br></br></h1>
        <span id='site_about'>You can always choose one turn! So why to take a      </span><span id='des_title'>    Wrong Turn .</span>
        <h5>Keep it simple and book it with <span>NexTurn</span></h5>
        </div>
        <div className="book_logo">
            <button className='book_button'>Book Tickets</button>
        </div>
        
    


    </div>
    )
}
export default Description