import NavBar from "../../components/NavBar/NavBar";
import SearchBooking from "../../components/SearchBooking/SearchBooking";
import SearchedItems from "../../components/SearchedItems/SearchedItems";
import axios from "axios";

const Booking = (props) =>{
    // function debounce(func, timeout = 5){
    //     let timer;
    //     return (...args) => {
    //       clearTimeout(timer);
    //       timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //     };
    //   }
const options = {
  method: 'GET',
  url: 'https://unogsng.p.rapidapi.com/genres',
  headers: {
    'X-RapidAPI-Key': '63bd36b27fmsh3fd80509a612a09p144527jsn6f3a55299dbd',
    'X-RapidAPI-Host': 'unogsng.p.rapidapi.com',
    "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "connection": "keep-alive",
  }
};

async function getdata() {
    await axios.request(options).then(function (response) {
    response.send(200);
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
// debounce(()=>{getdata()});
getdata();
    return(
        <div style={{maxWidth:"100%" ,overflowX:"hidden"}}>
            <NavBar />
            <div className="searchingelements" style={{display:"flex" , flexDirection:"row"}}>
            {/* <SearchBooking/> */}
            <SearchedItems/>
            </div>
        </div>
    )
}
export default Booking;