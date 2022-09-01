const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection){

    const router = express.Router();

// bookings home route
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error:err});
        });
    });

// bookings show route
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({_id:ObjectID(id)})
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status:500, error:err});
        });
    });

// bookings create route
    router.post('/', (req, res) => {
        const newBooking = req.body;
        collection
        .insertOne(newBooking)
        .then(result => res.json(result.ops[0]))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error:err})
        });
    });

// bookings delete route
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({_id: ObjectID(id)})
        .then(result => res.json(result))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error:err})
        });
    })

// bookings update route
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .updateOne({_id: ObjectID(id)}, {$set: updatedData})
        .then(result => res.json(result))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error:err})
        });
    })

return router;

}

module.exports = createRouter;