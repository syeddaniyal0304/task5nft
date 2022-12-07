const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
//use express.json() to get data into json format
//app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;
app.use(express.json());

//use cors

app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//import routes
//const TodoItemRoute = require('./routes/todoItems');
const NftItemRoute = require('./routes/nftRouter');
const AuctionItemRoute = require('./routes/auctionRouter');
const ActivitiesRoute = require('./routes/activityRouter');



//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


//app.use('/', TodoItemRoute);
app.use('/nft', NftItemRoute);
app.use('/Anft', AuctionItemRoute);
app.use('/activity', ActivitiesRoute);




//connect to server
app.listen(PORT, ()=> console.log("Server connected") );
