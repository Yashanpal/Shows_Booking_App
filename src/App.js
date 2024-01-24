
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Body from "./MyComponents/Body";
import ShowSummary from "./MyComponents/ShowSummary";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from "./MyComponents/BookingForm";
import About from "./MyComponents/About";
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/show/:id" element={<ShowSummary />} />
        <Route path="/book/:id/:showName" element={<BookingForm />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
