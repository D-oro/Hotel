import BookingCard from "./BookingCard";

const BookingsGrid = ({bookings, removeBooking}) =>{
    const bookingsList = bookings.map((booking) =>{
        return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking} />
    });

    return(
        <>
            <ul>{bookingsList}</ul>
        </>
    )
}

export default BookingsGrid