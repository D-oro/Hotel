import './App.css';
import {useEffect, useState} from 'react';
import BookingsForm from "./BookingsForm";
import BookingsGrid from "./BookingsGrid";
import {getBookings} from "./BookingService"

function App() {

  const[guestBookings, setGuestBookings] = useState([]);

  useEffect(()=>{
    getBookings().then((allBookings)=>{
      setGuestBookings(allBookings);
    })
  }, []);

  const addBooking = (booking)=>{
    const temp = guestBookings.map(s =>s);
    temp.push(booking);
    setGuestBookings(temp);
  }

  const removeBooking = (id)=>{
    const temp = guestBookings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setGuestBookings(temp)
  }

  return (
    <div className="App">
      <BookingsForm addBooking={addBooking} />
      <BookingsGrid bookings={guestBookings} removeBooking={removeBooking} />
    </div>
  );
}

export default App;
