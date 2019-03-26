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
let sectionSchema = new mongoose.Schema({
    title: String,
    body: String
});

//Comment this out when we put it in
app.use(express.static('public'));

// section is the name of the collection and we passed in the Scheme
//This returns a model or document you can say.
const SECTION = mongoose.model("section", sectionSchema);

app.post('/api/sections', async (req, res) => {
    //this creates a section object or really a model

    try {
        const section = SECTION({
            title: req.body.title,
            body: req.body.body
        })
        // we are going to wait until we save the object into the database
        await section.save()
        res.send(section)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/api/sections', async (req, res) => {
    try{
        let sections = await SECTION.find()
        res.send(sections)        
    } catch (err) {
        console.log(err)
        req.sendStatus(500)
    }
})
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});