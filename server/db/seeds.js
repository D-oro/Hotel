use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        fullname: "John Do",
        email: "john@gmail.com",
        checkedin: "no",
    },
    {
        fullname: "James Doh",
        email: "james@gmail.com",
        checkedin: "no",
    },
    {
        fullname: "Jenny Duh",
        email: "jenny@gmail.com",
        checkedin: "no",
    },
    {
        fullname: "Jasmine Doe",
        email: "Jasmine@gmail.com",
        checkedin: "yes",
    },
]); 

