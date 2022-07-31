import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './pages/Home/Home.component'
import Booking from './pages/Booking/Booking';
import Signin from './pages/Signin/Signin.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/BookTickets" element={<Booking/>} />
        <Route path="/Login" element= {<Signin/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
