import './Header.style.css'
const Header = (props) => {

    const movies_list = [
        {
            "image_list":"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brahmastra_Teaser.jpeg/220px-Brahmastra_Teaser.jpeg",
            "Ratings":"5",
            "Release_date":"08-08-2022",
            "Language":"Hindi"
            
        },{
            "image_list":"https://latestbollywoodcelebrityphotos.files.wordpress.com/2013/07/189843_437393269660184_696001941_n.jpg",
            "Ratings":"4",
            "Release_date":"25-12-2022",
            "Language":"Hindi"
            
        },
        {
            "image_list":"https://image.tmdb.org/t/p/original/sxeZgvv6mLZeGQMK1rvK3hw2W07.jpg",
            "Ratings":"7.8",
            "Release_date":"11-12-2022",
            "Language":"English"
            
        },
        {
            "image_list":"https://m.media-amazon.com/images/M/MV5BNzBkMTYwYjktMzFlZS00MmNhLTgxNjYtNGEwYjUxYTBlNjM5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
            "Ratings":"3.5",
            "Release_date":"20-11-2022",
            "Language":"Tamil"
            
        },
        {
            "image_list":"https://cdn.siasat.com/wp-content/uploads/2021/05/radhe-1.jpg",
            "Ratings":"6",
            "Release_date":"06-10-2022",
            "Language":"Hindi"
            
        },
        {
            "image_list":"https://wallpaperaccess.com/full/3947845.jpg",
            "Ratings":"7.8",
            "Release_date":"08-07-2022",
            "Language":"Telugu"
            
        },
        {
            "image_list":"https://qph.cf2.quoracdn.net/main-qimg-6dc27aaf31a98d182530edbd1f0cb025.webp",
            "Ratings":"10",
            "Release_date":"08-10-2022",
            "Language":"Hindi"
            
        }
    ]
    
    return (
        <div className='movies-info'>
                {          
                movies_list.map((items) =>{
                    return (
                        <div className="movies-container">
                        <img id ='image_flex' src={items["image_list"]}></img>
                        <span className='movie_val' >{items.Ratings}</span>
                        <span id='movie_lang' className='movie_val'>{items.Language}</span>
                        <span id='movie_release' className='movie_val'>{items.Release_date}</span> 
                        <button id='book_tickets' className='movie_val'>Book Tickets</button>
                        </div>
                        )
                })
            }
            
        </div>
    )

}
export default Header
