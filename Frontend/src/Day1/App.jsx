import Landing from "./Components/Landing"
import Booked from "./Components/Booked"
import Home1 from "./Components/Home1"
import Events from "./Components/Events"
import FullSidebar from "./Components/FullSidebar"
import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"
import Payment from "./Components/Payment"
import PaymentHistory from "./Components/PaymentHistory"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Login from "./Components/Login"
import Register from "./Components/Register"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (

    <div>
          <Router>
              <Routes>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
                <Route path="/" element={<Landing/>} ></Route>
                <Route path="/home" element={<Home1/>} ></Route>
                <Route path="/events" element={<Events/>} ></Route>
                <Route path="/booked" element={<Booked/>} ></Route>
                <Route path="/payment" element={<Payment/>} ></Route>
                <Route path="/payhistory" element={<PaymentHistory/>} ></Route>
              </Routes>
          </Router>
    </div>
  )
}

export default App
