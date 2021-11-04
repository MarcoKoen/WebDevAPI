const express = require('express')
const app = express()

res.header("Access-Control-Allow-Origin", "*");
//app.use(function(req, res, next) {
   // res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //  next();
//});



const port = process.env.PORT || 3000
const path = require('path');
const fs = require('fs');

const expressLayouts = require('express-ejs-layouts')

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(expressLayouts);

app.get('/', (req, res) => {

    res.send("Please refer to the documentation on how to use this API.")
});

app.get('/api/photos', (req, res) => {

    let rawdata = fs.readFileSync('photos.json');
    let photos = JSON.parse(rawdata);
    console.log(photos);

    res.send(photos)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))