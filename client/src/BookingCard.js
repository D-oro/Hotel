import { deleteBooking } from "./BookingService";

const BookingCard = ({booking, removeBooking}) => {

    // console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id)
        .then(() =>{
            removeBooking(booking._id);
        })
    }
    return(
        <>
            {booking.fullname} - {booking.email} - {booking.checkedin} - <button onClick={handleDelete}> delete</button>
        </>
    )
}


export default BookingCard;