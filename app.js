const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
// const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let newitems = []

app.get('/', (req, res) => {
    let currentDate = new Date();
    let formattedDate = currentDate.toDateString();
    res.render("list", { KindOFDay: formattedDate ,NewListitem:newitems});
    // res.send(`Hello Tulsi! Today's date is: ${formattedDate}`);
   
});

app.post('/',(req,res)=>{
    
    newitem = req.body.newitem;
    newitems.push(newitem);
    res.redirect('/');
    // console.log(req.body);

});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    newitems.splice(index, 1);
    res.redirect('/');
});


// // Server configuration
app.listen(3001, () => console.log("Server started "));


