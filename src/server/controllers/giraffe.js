const Giraffe = require("../models/giraffe");
//const Giraffe = require("../models/giraffe");
const mongoose = require('mongoose');
const path = require('path');

module.exports = (app) => {
    app.get('/api/aviaryCount', (req, res) =>{

        Giraffe.aggregate([
            { $group:  { _id: '$numAviary' }},
            { $count: "countAviary"}
        ]).exec(function(err, doc){
            // mongoose.disconnect();

            if(err) return console.log(err);
            console.log("Количество вольеров");
            console.log(doc);
            res.send(doc);
        });
    });

    app.get('/api/aviary/:id', (req, res) =>{
        Giraffe.find({numAviary: req.params.id},function(err, doc){
            // mongoose.disconnect();

            console.log("Поиск вольера сделан");
            //console.log(doc);
            if(err) return console.log(err);
            res.send(doc);
        });
    });
}