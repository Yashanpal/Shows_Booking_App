import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const BookingForm = () => {
  const { showName } = useParams();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    numberOfTickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newBooking = {
      showName,
      ...bookingData,
    };
  
   
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
    setBookingData({ name: '', email: '', numberOfTickets: 1 });
    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  
    alert('Booking successful!');
  
    navigate('/');
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Show Name</label>
          <input
            type="text"
            className="form-control"
            value={showName}
            readOnly
            style={{ cursor: "not-allowed", background: "rgb(148, 145, 145)", border: "black" }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
            placeholder="abc"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={bookingData.email}
            onChange={handleChange}
            required
            placeholder="xyz@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Tickets</label>
          <select
            className="form-select"
            name="numberOfTickets"
            value={bookingData.numberOfTickets}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-danger m-2" style={{ border: "1px solid black", borderRadius: "20px" }}>
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
