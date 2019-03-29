var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var port = 3001;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/book",{useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//The Schema is the structure of the model or the structure of the document
let structureSchema = new mongoose.Schema({
    structure: []
    // title: String,
    // body: String
});

//Comment this out when we put it in
app.use(express.static('public'));

// section is the name of the collection and we passed in the Scheme
//This returns a model or document you can say.
const STRUCTURE = mongoose.model("structure", structureSchema);

app.post('/api/structure', async (req, res) => {
    //this creates a section object or really a model

    try {
        const structure = STRUCTURE({
            structure: req.body.structure
        })
        // we are going to wait until we save the object into the database
        await structure.save()
        res.send(structure)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/api/structure', async (req, res) => {
    try{
        let structure = await STRUCTURE.find()
        res.send(structure)        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/api/structure/:id', async (req, res)=>{
    try{
        let structure = await STRUCTURE.findOne({_id: req.params.id})
        res.send(structure)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

})

app.delete('/api/structure/:id', async (req, res) =>{
    try {
        await STRUCTURE.deleteOne({
            _id:req.params.id
        })
        req.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.put('/api/structure/:id', async (req, res) => {
    try{
        let structure = await STRUCTURE.findOne({_id: req.params.id})
        structure = req.body.structure
        structure.save()
        res.send(structure)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});