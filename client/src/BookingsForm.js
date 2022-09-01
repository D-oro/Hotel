import {useState} from "react";
import { postBooking} from "./BookingService";

const BookingsForm = ({addBooking}) => {

// form data is empty at beginning
    const[formData, setFormData] = useState({
        fullname: "",
        email: "",
        checkedin: "",
    });

// show the letters the user is typing in
    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    };

// when user submits the form, change the data
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('form', formData);
        postBooking(formData).then((data)=>{
            addBooking(data);
        });

//set form data to empty again
        setFormData({
            fullname: "",
            email: "",
            checkedin: "",
        });
    };

    return(
        <form onSubmit={onSubmit} id="bookings-form">
            <h2>Add a new booking</h2>
            <label htmlFor="fullname">Full name: </label>
            <input 
                onChange={onChange} 
                type="text" 
                id="fullname" 
                name="fullname" 
                value={formData.fullname} />

            <label htmlFor="email">Email address: </label>
            <input
                onChange={onChange} 
                type="text"
                id="email"
                name="email"
                value={formData.email} />

            <label htmlFor="checkedin">Checked in? Type "yes" or "no" </label>
            <input
                onChange={onChange} 
                type="text"
                id="checkedin"
                name="checkedin"
                value={formData.checkedin} />

            <input type="submit" value="Save" id="save"/>
        </form>
    );
};

export default BookingsForm;