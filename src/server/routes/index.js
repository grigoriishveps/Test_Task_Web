const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: './uploads/' /* relative to root dir of project */,
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })

const Giraffe = require("../models/giraffe");

const mongoose = require('mongoose');
module.exports = (app) => {
    // Upload image
    app.post('/uploadImage', upload.single('file'), async (req, res) => {
        if (req.file) {
            res.send({ success: true,
            path: "../../../../uploads/"+req.file.name})
        } else {
            res.sendStatus(500)
        }
    })


    // Giraffe API
    app.post('/api/giraffe', (req, res) => {
        const id = req.body.id;
        const name = req.body.name;
        const gender = req.body.gender;
        const weight = req.body.weight;
        const height = req.body.height;
        const color = req.body.color;
        const diet = req.body.diet;
        const character = req.body.character;
        const photoPath = req.body.photoPath;
        const numAviary = req.body.numAviary;
        Giraffe.create({id,name, gender, weight,height, color, diet, character, photoPath,numAviary}, function(err, doc){
            // mongoose.disconnect();
            if(err) return console.log(err);
            console.log("Сохранен объект user", doc);
            res.send(doc);
        });

    })

    app.route('/api/giraffe/:id')
        .get((req, res) => {
            console.log(req.params.id);

            Giraffe.find({}, function(err, doc){
                // mongoose.disconnect();

                if(err) return console.log(err);

                console.log(doc);

            });
            Giraffe.find({id:req.params.id}, function(err, doc){
                // mongoose.disconnect();

                if(err) return console.log(err);
                console.log(doc);
                res.send(doc);
            });
        })
        
        .put((req, res) => {
            Giraffe.updateOne({id:req.params.id}, req.body, function(err, doc){
                // mongoose.disconnect();
                if(err) return console.log(err);
                console.log("Обновлен объект user", doc);
                res.send(doc);
            });
        })
        .delete((req, res) => {
            console.log("Удаление элемента с id "+req.params.id);
            Giraffe.remove({id :req.params.id}, function(err, result){
                // mongoose.disconnect();

                if(err) return console.log(err);

                console.log(result);
                console.log("Удалены");
                res.send(result);
            });
        });

    app.get('/api/giraffe', (req, res) => {
        Giraffe.find({}, function(err, doc){
            // mongoose.disconnect();
            if(err) return console.log(err);
            console.log("Сохранен объект user", doc);
            res.send(doc);
        });
    })
}